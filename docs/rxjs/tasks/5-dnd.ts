import { fromEvent, map, switchMap, takeUntil } from 'rxjs';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="draggable" style="width: 100px; height: 100px; background: red; position: absolute; border-radius: 8px;"></div>
`;

const draggableElement = document.getElementById('draggable')!;

const mouseDown$ = fromEvent<MouseEvent>(draggableElement, 'mousedown');

const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');

const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');

mouseDown$
  .pipe(
    switchMap((startEvent) => {
      // Фиксируем начальную позицию элемента
      const startX = draggableElement.offsetLeft;
      const startY = draggableElement.offsetTop;
      const clientX = startEvent.clientX;
      const clientY = startEvent.clientY;

      return mouseMove$.pipe(
        map((moveEvent) => ({
          left: startX + moveEvent.clientX - clientX,
          top: startY + moveEvent.clientY - clientY,
          width: draggableElement.offsetWidth,
          height: draggableElement.offsetHeight,
        })),
        takeUntil(mouseUp$)
      );
    })
  )
  .subscribe((pos) => {
    // Проверка границ
    const left = Math.max(0, Math.min(pos.left, window.innerWidth - pos.width));
    const top = Math.max(0, Math.min(pos.top, window.innerHeight - pos.height));

    draggableElement.style.left = `${left}px`;
    draggableElement.style.top = `${top}px`;
  });
