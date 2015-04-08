var coinCombination = function(input) {
    var result = [0, 0, 0, 0];

    var quarter = Math.floor(input /25);
    result[0] = quarter;
    var output_result = input - (quarter *25);

    var dime = Math.floor(output_result/10);
    result[1]= dime;
    var output_result = output_result - (dime * 10);

    var nickel = Math.floor(output_result / 5);
    result[2]= nickel;
    var output_result = output_result - (nickel * 5);

    result[3] = output_result;

    return result;
};

$(document).ready(function() {
    $("form#coinCombination").submit(function(event) {
        var input = parseInt($('input#input').val());
        var result = coinCombination(input);
        var quarter = result[0];
        var dime = result[1];
        var nickel = result[2];
        var penny = result[3];

        $(".quarter").text(quarter);
        if (quarter) {
            $(".quarter").show();
            $(".not_quarter").text("quarter(s) ");
        } else {
            $(".quarter").hide();
            $(".not_quarter").text("");
        }


        $(".dime").text(dime);
        if (dime) {
            $(".dime").show();
            $(".not_dime").text("dime(s) ");
        } else {
            $(".dime").hide();
            $(".not_dime").text("");
        }


        $(".nickel").text(nickel);
        if (nickel) {
            $(".nickel").show();
            $(".not_nickel").text("nickel(s) ");
        } else {
            $(".nickel").hide();
            $(".not_nickel").text("");
        }

        $(".penny").text(penny);
        if (penny) {
            $(".penny").show();
            $(".not_penny").text("penny(s) ");
        } else {
            $(".penny").hide();
            $(".not_penny").text("");
        }

        $("#result").show();

        event.preventDefault();
    });
});
