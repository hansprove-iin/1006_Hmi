// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../../Packages/Beckhoff.TwinCAT.HMI.Framework.14.3.431/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var TcHmiProject1;
        (function (TcHmiProject1) {
            function VisibilityFromBool(par1) {
                if (par1 === undefined || par1 === null) {
                    return 'Visible';
                }
                return par1 ? 'Visible' : 'Hidden';
//                if (par1) {
 //                   return 'Visible';
  //              } else {
    //                return 'Collapsed';
      //          }
            }
            TcHmiProject1.VisibilityFromBool = VisibilityFromBool;
        })(TcHmiProject1 = Functions.TcHmiProject1 || (Functions.TcHmiProject1 = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('VisibilityFromBool', 'TcHmi.Functions.TcHmiProject1', TcHmi.Functions.TcHmiProject1.VisibilityFromBool);
