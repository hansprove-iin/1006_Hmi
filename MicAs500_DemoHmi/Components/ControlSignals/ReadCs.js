// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function ReadCs(hmi) {
                var symbolObj = new TcHmi.Symbol(hmi);

                TcHmi.Symbol.readEx2(hmi, function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        // 'val' now holds your PLC struct/value
                        var val = data.value; 
                        console.log("The value is:", val);
        
                        // Example: access a specific signal
                        // var isMoving = val.bIsMoving; 
                    } else {
                        console.error("Could not read symbol:", data.error);
                    }});




//                var sym = new TcHmi.Symbol(symbolObj);
                /**
                sym.watch(function (data) {

                    if (data.error !== TcHmi.Errors.NONE) {
                        console.error('watch error', data.error);
                        return;
                    }

                    console.log('value changed:', data.value);

                });
                */
            }
            TcHmiProject1.ReadCs = ReadCs;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('ReadCs', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.ReadCs);
