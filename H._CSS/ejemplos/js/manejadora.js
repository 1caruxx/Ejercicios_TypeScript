"use strict";
/// <reference path="../libs/jquery/index.d.ts" />
$(document).ready(function () {
    $("#p01").mouseover(function () {
        $("#p01").addClass("negrita");
    });
    $("#p01").mouseout(function () {
        $("#p01").removeClass("negrita");
    });
    $("#btn01").click(function () {
        if ($("#p02").attr("class") == "negrita")
            $("#p02").removeClass("negrita");
        else
            $("#p02").addClass("negrita");
    });
});
//# sourceMappingURL=manejadora.js.map