// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../../1006_CompleteSolution/Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.350/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var MicAs500_DemoHmi;
        (function (MicAs500_DemoHmi) {
            function adjustCuringStationIndex(inc, dec, idx, maxIdx) {

            // 1. Check if the symbol path is valid
            if (!idx) return;

            // 2. Read the current value of the parameter
            var currentValue = TcHmi.Symbol.readEx(idx);

            newValue = currentValue;

            if (inc) {
                newValue = Math.min(++currentValue, maxIdx);
            }

            if (dec) {
                newValue = Math.max(--currentValue, maxIdx);
            }
               
            TcHmi.Symbol.writeEx(idx, newValue);


            }
            MicAs500_DemoHmi.adjustCuringStationIndex = adjustCuringStationIndex;
        })(MicAs500_DemoHmi = Functions.MicAs500_DemoHmi || (Functions.MicAs500_DemoHmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('adjustCuringStationIndex', 'TcHmi.Functions.MicAs500_DemoHmi', TcHmi.Functions.MicAs500_DemoHmi.adjustCuringStationIndex);
