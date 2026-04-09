// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function ToggleParam(par1) {
            // 1. Check if the symbol path is valid
            if (!par1) return;

            // 2. Read the current value of the parameter
            var currentValue = TcHmi.Symbol.readEx(par1);

            // 3. Write the toggled value back to the PLC
            TcHmi.Symbol.writeEx(par1, !currentValue);
            }
            TcHmiProject1.ToggleParam = ToggleParam;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('ToggleParam', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.ToggleParam);
