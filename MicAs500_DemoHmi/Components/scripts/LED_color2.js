// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function LED_color2(booleanSymbol, activeColor, passiveColor) {



            console.log('___LED_color 2   called');

               TcHmi.Symbol.readEx2(booleanSymbol, function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        var actualValue = data.value; // This is the resolved boolean/number/string from the PLC
                        console.log("Resolved Value:", actualValue);
                    } else {
                        console.error("Error resolving symbol:", data.error);
                    }
                });







             if (booleanSymbol === undefined || booleanSymbol === null) {
                return { "color": "pink" }; 
                }

                var currentValue = TcHmi.Symbol.readEx(booleanSymbol);


                if (currentValue === true || currentValue === 1 || currentValue === '1') {
                    return { color: activeColor };
                }

                return { color: passiveColor };

            }
            TcHmiProject1.LED_color2 = LED_color2;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('LED_color2', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.LED_color2);
