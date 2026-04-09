// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function TestParams(par) {
                console.log(par);

                var currentValue = TcHmi.Symbol.readEx(par);
                console.log(currentValue);


                TcHmi.Symbol.readEx2(par, function (data) {
                    if (data.error === TcHmi.Errors.NONE) {
                        var actualValue = data.value; // This is the resolved boolean/number/string from the PLC
                        console.log("Resolved Value:", actualValue);
                    } else {
                        console.error("Error resolving symbol:", data.error);
                    }
                });

                var mySymbol = new TcHmi.Symbol(par);
                var expression = mySymbol.getExpression();
                if (expression) {
                    // getPath() returns the resolved absolute address (e.g., "PLC1.MAIN.myVar")
                    console.log("Absolute Address:", expression.getPath());
                }


                if (mySymbol.exists()) {
                    console.log('exist)');
                }


            }
            TcHmiProject1.TestParams = TestParams;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('TestParams', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.TestParams);
