// $(document).ready(function () {
//     var form = $('#contactForm'); // contact form
//     var submit = $('.button-contactForm'); // submit button
//     var alert = $('.alert-msg'); // alert div for show alert message
//     (function ($) {
//         "use strict";

//         jQuery.validator.addMethod('answercheck', function (value, element) {
//             return this.optional(element) || /^\bcat\b$/.test(value)
//         }, "type the correct answer -_-");

//         // validate contactForm form
//         $(function () {
//             $('#contactForm').validate({
//                 rules: {
//                     name: {
//                         required: true,
//                         minlength: 2
//                     },
//                     subject: {
//                         required: true,
//                         minlength: 4
//                     },
//                     number: {
//                         required: true,
//                         minlength: 10
//                     },
//                     email: {
//                         required: true,
//                         email: true
//                     },
//                     message: {
//                         required: true,
//                         minlength: 20
//                     }
//                 },
//                 messages: {
//                     name: {
//                         required: "come on, you have a name, don't you?",
//                         minlength: "your name must consist of at least 2 characters"
//                     },
//                     subject: {
//                         required: "come on, you have a subject, don't you?",
//                         minlength: "your subject must consist of at least 4 characters"
//                     },
//                     number: {
//                         required: "come on, you have a number, don't you?",
//                         minlength: "your Number must consist of at least 5 characters"
//                     },
//                     email: {
//                         required: "no email, no message"
//                     },
//                     message: {
//                         required: "um...yea, you have to write something to send this form.",
//                         minlength: "thats all? really?"
//                     }
//                 },
//                 // form submit event
//                 form.on('submit', function (e) {
//                     e.preventDefault(); // prevent default form submit

//                     $.ajax({
//                         url: 'https://api.apispreadsheets.com/data/21085/', // form action url
//                         type: 'POST', // form submit method get/post
//                         dataType: 'html', // request type html/json/xml
//                         data: form.serialize(), // serialize form data
//                         beforeSend: function () {
//                             alert.fadeOut();
//                             submit.html('Sending....'); // change submit button text
//                         },
//                         success: function (data) {
//                             alert.html(data).fadeIn(); // fade in response data
//                             form.trigger('reset'); // reset form
//                             submit.attr("style", "display: none !important");; // reset submit button text
//                             $('#contactForm :input').attr('disabled', 'disabled');
//                             $('#contactForm').fadeTo("slow", 1, function () {
//                                 $(this).find(':input').attr('disabled', 'disabled');
//                                 $(this).find('label').css('cursor', 'default');
//                                 $('#success').fadeIn()
//                                 $('.modal').modal('hide');
//                                 $('#success').modal('show');
//                             })
//                         },
//                         error: function (e) {
//                             $('#contactForm').fadeTo("slow", 1, function () {
//                                 $('#error').fadeIn()
//                                 $('.modal').modal('hide');
//                                 $('#error').modal('show');
//                             })
//                         }
//                     });
//                 })
//             });
//         })
//     })(jQuery)
// });

 $(document).ready(function () {
     var cform = $('#contactForm'); // contact form
     var submit = $('.button-contactForm'); // submit button
     var alert = $('.alert-msg'); // alert div for show alert message

     // form submit event
     cform.on('submit', function (e) {
         e.preventDefault(); // prevent default form submit

         $.ajax({
             url: 'https://api.apispreadsheets.com/data/21085/', // form action url
             type: 'POST', // form submit method get/post
             dataType: 'html', // request type html/json/xml
             data: cform.serialize(), // serialize form data
             beforeSend: function () {
                 alert.fadeOut();
                 submit.html('Sending....'); // change submit button text
             },
             success: function (data) {
                 alert.html(data).fadeIn(); // fade in response data
                 cform.trigger('reset'); // reset form
                 submit.attr("style", "display: none !important");; // reset submit button text
             },
             error: function (e) {
                 console.log(e)
             }
         });
     });
 });