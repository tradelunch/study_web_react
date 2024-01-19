export class WorkerFactory {
    worker: Worker;
    url: string;

    constructor(workerFunc: () => void) {
        const code = workerFunc.toString();
        const blob = new Blob([`(${code})()`]);
        this.url = URL.createObjectURL(blob);

        this.worker = new Worker(this.url);
    }

    revokeWorkerURL() {
        URL.revokeObjectURL(this.url);
    }

    terminate() {
        this.revokeWorkerURL();
        this.worker.terminate();
    }
}
