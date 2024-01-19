// import * as R from 'ramda'; // must be imported inline 

const worker_function = () => {
    console.log('WORKER-fn::init');

    self.onmessage = function (event) {
        // do not work Error
        // console.log('WORKER-fn:: read ', R.prop('data')(event)); 

        console.log('WORKER-fn:: read ', event.data);

        self.postMessage({
            payload: {
                msg: 'WORKER-fn:: send ',
            },
        });
    };
};

let code = worker_function.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));
const blob = new Blob([code], { type: 'application/javascript' });

export const workerFunctionBlob = URL.createObjectURL(blob);
