type CustomRefObject = {
    _current: HTMLElement | null;
    get current(): HTMLElement | null;
    set current(value: HTMLElement | null);
};
