/**
 * Created by user on 1/6/16.
 */

$(document).ready(function(){


    $(".getBalance").on("click", function(event){
        event.preventDefault();
        $.ajax("/balance").then(function(response){
            var balance = response;
            var $acctBal = "<p>" + "Account Balance: " + balance + "</p>";
            $("#balance").html($acctBal);
        })
    });
});

    //tried to do it this way first, but it didn't work
    //
    //function getBalQuery(){
    //    $.ajax("/balance").then(function(response){
    //            console.log(response);
    //        })
    //}
    //
    //$(".getBalance").on("click", function(event){
    //    event.preventDefault();
    //    console.log('button clicked');
    //    getBalQuery();
    //});


