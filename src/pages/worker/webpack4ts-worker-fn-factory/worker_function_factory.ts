// import * as R from 'ramda';

const worker_function = () => {
    console.log('WORKER-fn-factory script::init ');

    self.onmessage = function (event) {
        // console.log('WORKER-fn-factory::read ', R.prop('data')(event)); // do not work
        console.log('WORKER-fn-factory::read ', event.data);

        self.postMessage({
            payload: {
                msg: 'WORKER-fn-factory::send from function script:: ',
            },
        });
    };
};

let code = worker_function.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
const blob = new Blob([code], { type: 'application/javascript' });

export const workerFunctionBlob = URL.createObjectURL(blob);
