// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function LED_color(par1, activeColor, passiveColor) {

             if (par1 === undefined || par1 === null) {
                return { "color": "pink" }; 
                }

                if (par1 === true || par1 === 1 || par1 === '1') {
                    return { color: activeColor };
                }

                return { color: passiveColor };

            }
            TcHmiProject1.LED_color = LED_color;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('LED_color', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.LED_color);
