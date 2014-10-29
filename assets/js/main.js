$(".page_content a").attr('target','_blank');

$('#cat').val($('#value_of_category').text());
$('#select_sponsor').val($('#value_of_sponsor').text());

function anonymousBriefImageUpload() {
    var file = document.getElementById('uploadFile').files[0];
    var fd = new FormData();
    var key = file.name;

    fd.append('key', key);
    fd.append("file",file);

    $('#brief_image_url').remove();
    $(".inner").append('<input id="brief_image_url" type="string" name="brief_image_url" value="'
      + 'https://briefcasefc.s3.amazonaws.com/' 
      + key 
      + '" readonly>');

    var xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", uploadProgress, false);

    xhr.open('POST', 'https://briefcasefc.s3.amazonaws.com/', true);
    xhr.send(fd);
};
function anonymousSponsorImageUpload() {
    var file = document.getElementById('uploadFileSponsor').files[0];
    var fd = new FormData();
    var key = file.name;

    fd.append('key', key);
    fd.append("file",file);

    $('#sponsor_url_image').remove();
    $(".inner").append('<input id="sponsor_url_image" type="string" name="sponsor_url_image"' 
      + 'value="https://briefcasefc.s3.amazonaws.com/' 
      + key 
      + '" readonly>');

    var xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", uploadProgress, false);

    xhr.open('POST', 'https://briefcasefc.s3.amazonaws.com/', true);
    xhr.send(fd);
};
function uploadProgress(evt) {
    if (evt.lengthComputable) {
        var percentComplete = Math.round(evt.loaded * 100 / evt.total);
        document.getElementById('progressNumber').innerHTML = percentComplete.toString() + '%';
        if (evt.loaded == evt.total) {
            console.log("Hello world");
        }
    } else {
        document.getElementById('progressNumber').innerHTML = 'unable to compute';
    }
};
$(function imagePreview() {
    $("#uploadFile").on("change", function() {

        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test(files[0].type)) { // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function(){ // set image data as background of div
                $( "#uploadStuff" ).removeClass( "upload_image edit_image_preview" ).addClass("upload_image_preview" );
                $( ".image_instruction" ).remove();
                $( "#image_data" ).remove();
                $( "#url_image_data" ).remove();
                $( ".upload_image_preview" ).css( "background-image", "url(" + this.result + ")" );
            };

            anonymousBriefImageUpload();
        }
    });
});

$(function imagePreviewSponsor() {
    $("#uploadFileSponsor").on("change", function() {

        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test(files[0].type)) { // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function(){ // set image data as background of div
                $( "#uploadStuff" ).removeClass( "upload_image" ).addClass("upload_image_preview" );
                $( ".image_instruction" ).remove();
                $( "#image_data" ).remove();
                $( "#url_image_data" ).remove();
                $( ".upload_image_preview" ).css( "background-image", "url(" + this.result + ")" );
            };

            anonymousSponsorImageUpload();
        }
    });
});

var refNum = 0;
function addOneMoreReference() {
    refNum ++;
    $( "#addReference" ).before(    '<div id="'+refNum+'">'
                                    + '<h3 class=greySections>'
                                    + 'Reference '
                                    + '<span class="textLinkRef" onclick="removeThisReference(' + refNum + ');" style="cursor: pointer;"><i class="icon-cancel"></i></span>' 
                                    + '</h3>' 
                                    + '<input type="text" name="reference[' + refNum + '][text]" placeholder="Attribute" style="margin-bottom:19px"/>' 
                                    + '<input style="margin-bottom:30px" type="text" name="reference[' + refNum + '][url]" placeholder="URL (optional)"/>'
                                    + '</div>'
                               );
};
function removeThisReference(num) {
    $('#'+num).remove();
    console.log('function as been called')
};


var addNum = 0;
function checkNumberOfReferences(num){
    addNum = num;
    console.log(addNum);
    return addNum
};

function checkAndAddOneMoreReference(){
    addNum++;
    $( "#addReference" ).before(    '<div id="'+addNum+'">'
                                    + '<h3 class=greySections>'
                                    + 'Reference ' 
                                    + '<span class="textLinkRef" onclick="removeThisReference('+addNum+');" style="cursor: pointer;"><i class="icon-cancel"></i></span>' 
                                    + '</h3>' 
                                    + '<input type="text" name="reference['+addNum+'][text]" placeholder="Attribute" style="margin-bottom:19px"/>' 
                                    + '<input style="margin-bottom:30px" type="text" name="reference['+addNum+'][url]" placeholder="URL (optional)"/>'
                                    + '</div>'
                               );
};



$(function () {
    $(".select_country").select2({
        placeholder: "Select one",
        data: data_country,
        combobox: true
    }).on("change", function(e){
        $(".first").text("val: " + e.val);
    });
});

var data_country = {
    results: [ 
        {id: 1, text: 'Afghanistan', code: 'AF'}, 
        {id: 2, text: 'Aland Islands', code: 'AX'}, 
        {id: 3, text: 'Albania', code: 'AL'}, 
        {id: 4, text: 'Algeria', code: 'DZ'}, 
        {id: 5, text: 'American Samoa', code: 'AS'}, 
        {id: 6, text: 'AndorrA', code: 'AD'}, 
        {id: 7, text: 'Angola', code: 'AO'}, 
        {id: 8, text: 'Anguilla', code: 'AI'}, 
        {id: 9, text: 'Antarctica', code: 'AQ'}, 
        {id: 10, text: 'Antigua and Barbuda', code: 'AG'}, 
        {id: 11, text: 'Argentina', code: 'AR'}, 
        {id: 12, text: 'Armenia', code: 'AM'}, 
        {id: 13, text: 'Aruba', code: 'AW'}, 
        {id: 14, text: 'Australia', code: 'AU'}, 
        {id: 15, text: 'Austria', code: 'AT'}, 
        {id: 16, text: 'Azerbaijan', code: 'AZ'}, 
        {id: 17, text: 'Bahamas', code: 'BS'}, 
        {id: 18, text: 'Bahrain', code: 'BH'}, 
        {id: 19, text: 'Bangladesh', code: 'BD'}, 
        {id: 20, text: 'Barbados', code: 'BB'}, 
        {id: 21, text: 'Belarus', code: 'BY'}, 
        {id: 22, text: 'Belgium', code: 'BE'}, 
        {id: 23, text: 'Belize', code: 'BZ'}, 
        {id: 24, text: 'Benin', code: 'BJ'}, 
        {id: 25, text: 'Bermuda', code: 'BM'}, 
        {id: 26, text: 'Bhutan', code: 'BT'}, 
        {id: 27, text: 'Bolivia', code: 'BO'}, 
        {id: 28, text: 'Bosnia and Herzegovina', code: 'BA'}, 
        {id: 29, text: 'Botswana', code: 'BW'}, 
        {id: 30, text: 'Bouvet Island', code: 'BV'}, 
        {id: 31, text: 'Brazil', code: 'BR'}, 
        {id: 32, text: 'British Indian Ocean Territory', code: 'IO'}, 
        {id: 33, text: 'Brunei Darussalam', code: 'BN'}, 
        {id: 34, text: 'Bulgaria', code: 'BG'}, 
        {id: 35, text: 'Burkina Faso', code: 'BF'}, 
        {id: 36, text: 'Burundi', code: 'BI'}, 
        {id: 37, text: 'Cambodia', code: 'KH'}, 
        {id: 38, text: 'Cameroon', code: 'CM'}, 
        {id: 39, text: 'Canada', code: 'CA'}, 
        {id: 40, text: 'Cape Verde', code: 'CV'}, 
        {id: 41, text: 'Cayman Islands', code: 'KY'}, 
        {id: 42, text: 'Central African Republic', code: 'CF'}, 
        {id: 43, text: 'Chad', code: 'TD'}, 
        {id: 44, text: 'Chile', code: 'CL'}, 
        {id: 45, text: 'China', code: 'CN'}, 
        {id: 46, text: 'Christmas Island', code: 'CX'}, 
        {id: 47, text: 'Cocos (Keeling) Islands', code: 'CC'}, 
        {id: 48, text: 'Colombia', code: 'CO'}, 
        {id: 49, text: 'Comoros', code: 'KM'}, 
        {id: 50, text: 'Congo', code: 'CG'}, 
        {id: 51, text: 'Congo, The Democratic Republic of the', code: 'CD'}, 
        {id: 52, text: 'Cook Islands', code: 'CK'}, 
        {id: 53, text: 'Costa Rica', code: 'CR'}, 
        {id: 54, text: 'Cote D\'Ivoire', code: 'CI'}, 
        {id: 55, text: 'Croatia', code: 'HR'}, 
        {id: 56, text: 'Cuba', code: 'CU'}, 
        {id: 57, text: 'Cyprus', code: 'CY'}, 
        {id: 58, text: 'Czech Republic', code: 'CZ'}, 
        {id: 59, text: 'Denmark', code: 'DK'}, 
        {id: 60, text: 'Djibouti', code: 'DJ'}, 
        {id: 61, text: 'Dominica', code: 'DM'}, 
        {id: 62, text: 'Dominican Republic', code: 'DO'}, 
        {id: 63, text: 'Ecuador', code: 'EC'}, 
        {id: 64, text: 'Egypt', code: 'EG'}, 
        {id: 65, text: 'El Salvador', code: 'SV'}, 
        {id: 66, text: 'Equatorial Guinea', code: 'GQ'}, 
        {id: 67, text: 'Eritrea', code: 'ER'}, 
        {id: 68, text: 'Estonia', code: 'EE'}, 
        {id: 69, text: 'Ethiopia', code: 'ET'}, 
        {id: 70, text: 'Falkland Islands (Malvinas)', code: 'FK'}, 
        {id: 71, text: 'Faroe Islands', code: 'FO'}, 
        {id: 72, text: 'Fiji', code: 'FJ'}, 
        {id: 73, text: 'Finland', code: 'FI'}, 
        {id: 74, text: 'France', code: 'FR'}, 
        {id: 75, text: 'French Guiana', code: 'GF'}, 
        {id: 76, text: 'French Polynesia', code: 'PF'}, 
        {id: 77, text: 'French Southern Territories', code: 'TF'}, 
        {id: 78, text: 'Gabon', code: 'GA'}, 
        {id: 79, text: 'Gambia', code: 'GM'}, 
        {id: 80, text: 'Georgia', code: 'GE'}, 
        {id: 81, text: 'Germany', code: 'DE'}, 
        {id: 82, text: 'Ghana', code: 'GH'}, 
        {id: 83, text: 'Gibraltar', code: 'GI'}, 
        {id: 84, text: 'Greece', code: 'GR'}, 
        {id: 85, text: 'Greenland', code: 'GL'}, 
        {id: 86, text: 'Grenada', code: 'GD'}, 
        {id: 87, text: 'Guadeloupe', code: 'GP'}, 
        {id: 88, text: 'Guam', code: 'GU'}, 
        {id: 89, text: 'Guatemala', code: 'GT'}, 
        {id: 90, text: 'Guernsey', code: 'GG'}, 
        {id: 91, text: 'Guinea', code: 'GN'}, 
        {id: 92, text: 'Guinea-Bissau', code: 'GW'}, 
        {id: 93, text: 'Guyana', code: 'GY'}, 
        {id: 94, text: 'Haiti', code: 'HT'}, 
        {id: 95, text: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
        {id: 96, text: 'Holy See (Vatican City State)', code: 'VA'}, 
        {id: 97, text: 'Honduras', code: 'HN'}, 
        {id: 98, text: 'Hong Kong', code: 'HK'}, 
        {id: 99, text: 'Hungary', code: 'HU'}, 
        {id: 100, text: 'Iceland', code: 'IS'}, 
        {id: 101, text: 'India', code: 'IN'}, 
        {id: 102, text: 'Indonesia', code: 'ID'}, 
        {id: 103, text: 'Iran, Islamic Republic Of', code: 'IR'}, 
        {id: 104, text: 'Iraq', code: 'IQ'}, 
        {id: 105, text: 'Ireland', code: 'IE'}, 
        {id: 106, text: 'Isle of Man', code: 'IM'}, 
        {id: 107, text: 'Israel', code: 'IL'}, 
        {id: 108, text: 'Italy', code: 'IT'}, 
        {id: 109, text: 'Jamaica', code: 'JM'}, 
        {id: 110, text: 'Jersey', code: 'JE'}, 
        {id: 111, text: 'Jordan', code: 'JO'}, 
        {id: 112, text: 'Kazakhstan', code: 'KZ'}, 
        {id: 113, text: 'Kenya', code: 'KE'}, 
        {id: 114, text: 'Kiribati', code: 'KI'}, 
        {id: 115, text: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
        {id: 116, text: 'Korea, Republic of', code: 'KR'}, 
        {id: 117, text: 'Kuwait', code: 'KW'}, 
        {id: 118, text: 'Kyrgyzstan', code: 'KG'}, 
        {id: 119, text: 'Lao People\'S Democratic Republic', code: 'LA'}, 
        {id: 120, text: 'Latvia', code: 'LV'}, 
        {id: 121, text: 'Lebanon', code: 'LB'}, 
        {id: 122, text: 'Lesotho', code: 'LS'}, 
        {id: 123, text: 'Liberia', code: 'LR'}, 
        {id: 124, text: 'Libyan Arab Jamahiriya', code: 'LY'}, 
        {id: 125, text: 'Liechtenstein', code: 'LI'}, 
        {id: 126, text: 'Lithuania', code: 'LT'}, 
        {id: 127, text: 'Luxembourg', code: 'LU'}, 
        {id: 128, text: 'Macao', code: 'MO'}, 
        {id: 129, text: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
        {id: 130, text: 'Madagascar', code: 'MG'}, 
        {id: 131, text: 'Malawi', code: 'MW'}, 
        {id: 132, text: 'Malaysia', code: 'MY'}, 
        {id: 133, text: 'Maldives', code: 'MV'}, 
        {id: 134, text: 'Mali', code: 'ML'}, 
        {id: 135, text: 'Malta', code: 'MT'}, 
        {id: 136, text: 'Marshall Islands', code: 'MH'}, 
        {id: 137, text: 'Martinique', code: 'MQ'}, 
        {id: 138, text: 'Mauritania', code: 'MR'}, 
        {id: 139, text: 'Mauritius', code: 'MU'}, 
        {id: 140, text: 'Mayotte', code: 'YT'}, 
        {id: 141, text: 'Mexico', code: 'MX'}, 
        {id: 142, text: 'Micronesia, Federated States of', code: 'FM'}, 
        {id: 143, text: 'Moldova, Republic of', code: 'MD'}, 
        {id: 144, text: 'Monaco', code: 'MC'}, 
        {id: 145, text: 'Mongolia', code: 'MN'}, 
        {id: 146, text: 'Montserrat', code: 'MS'}, 
        {id: 147, text: 'Morocco', code: 'MA'}, 
        {id: 148, text: 'Mozambique', code: 'MZ'}, 
        {id: 149, text: 'Myanmar', code: 'MM'}, 
        {id: 150, text: 'Namibia', code: 'NA'}, 
        {id: 151, text: 'Nauru', code: 'NR'}, 
        {id: 152, text: 'Nepal', code: 'NP'}, 
        {id: 153, text: 'Netherlands', code: 'NL'}, 
        {id: 154, text: 'Netherlands Antilles', code: 'AN'}, 
        {id: 155, text: 'New Caledonia', code: 'NC'}, 
        {id: 156, text: 'New Zealand', code: 'NZ'}, 
        {id: 157, text: 'Nicaragua', code: 'NI'}, 
        {id: 158, text: 'Niger', code: 'NE'}, 
        {id: 159, text: 'Nigeria', code: 'NG'}, 
        {id: 160, text: 'Niue', code: 'NU'}, 
        {id: 161, text: 'Norfolk Island', code: 'NF'}, 
        {id: 162, text: 'Northern Mariana Islands', code: 'MP'}, 
        {id: 163, text: 'Norway', code: 'NO'}, 
        {id: 164, text: 'Oman', code: 'OM'}, 
        {id: 165, text: 'Pakistan', code: 'PK'}, 
        {id: 166, text: 'Palau', code: 'PW'}, 
        {id: 167, text: 'Palestinian Territory, Occupied', code: 'PS'}, 
        {id: 168, text: 'Panama', code: 'PA'}, 
        {id: 169, text: 'Papua New Guinea', code: 'PG'}, 
        {id: 170, text: 'Paraguay', code: 'PY'}, 
        {id: 171, text: 'Peru', code: 'PE'}, 
        {id: 172, text: 'Philippines', code: 'PH'}, 
        {id: 173, text: 'Pitcairn', code: 'PN'}, 
        {id: 174, text: 'Poland', code: 'PL'}, 
        {id: 175, text: 'Portugal', code: 'PT'}, 
        {id: 176, text: 'Puerto Rico', code: 'PR'}, 
        {id: 177, text: 'Qatar', code: 'QA'}, 
        {id: 178, text: 'Reunion', code: 'RE'}, 
        {id: 179, text: 'Romania', code: 'RO'}, 
        {id: 180, text: 'Russian Federation', code: 'RU'}, 
        {id: 181, text: 'RWANDA', code: 'RW'}, 
        {id: 182, text: 'Saint Helena', code: 'SH'}, 
        {id: 183, text: 'Saint Kitts and Nevis', code: 'KN'}, 
        {id: 184, text: 'Saint Lucia', code: 'LC'}, 
        {id: 185, text: 'Saint Pierre and Miquelon', code: 'PM'}, 
        {id: 186, text: 'Saint Vincent and the Grenadines', code: 'VC'}, 
        {id: 187, text: 'Samoa', code: 'WS'}, 
        {id: 188, text: 'San Marino', code: 'SM'}, 
        {id: 189, text: 'Sao Tome and Principe', code: 'ST'}, 
        {id: 190, text: 'Saudi Arabia', code: 'SA'}, 
        {id: 191, text: 'Senegal', code: 'SN'}, 
        {id: 192, text: 'Serbia and Montenegro', code: 'CS'}, 
        {id: 193, text: 'Seychelles', code: 'SC'}, 
        {id: 194, text: 'Sierra Leone', code: 'SL'}, 
        {id: 195, text: 'Singapore', code: 'SG'}, 
        {id: 196, text: 'Slovakia', code: 'SK'}, 
        {id: 197, text: 'Slovenia', code: 'SI'}, 
        {id: 198, text: 'Solomon Islands', code: 'SB'}, 
        {id: 199, text: 'Somalia', code: 'SO'}, 
        {id: 200, text: 'South Africa', code: 'ZA'}, 
        {id: 201, text: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
        {id: 202, text: 'Spain', code: 'ES'}, 
        {id: 203, text: 'Sri Lanka', code: 'LK'}, 
        {id: 204, text: 'Sudan', code: 'SD'}, 
        {id: 205, text: 'Suritext', code: 'SR'}, 
        {id: 206, text: 'Svalbard and Jan Mayen', code: 'SJ'}, 
        {id: 207, text: 'Swaziland', code: 'SZ'}, 
        {id: 208, text: 'Sweden', code: 'SE'}, 
        {id: 209, text: 'Switzerland', code: 'CH'}, 
        {id: 210, text: 'Syrian Arab Republic', code: 'SY'}, 
        {id: 211, text: 'Taiwan, Province of China', code: 'TW'}, 
        {id: 212, text: 'Tajikistan', code: 'TJ'}, 
        {id: 213, text: 'Tanzania, United Republic of', code: 'TZ'}, 
        {id: 214, text: 'Thailand', code: 'TH'}, 
        {id: 215, text: 'Timor-Leste', code: 'TL'}, 
        {id: 216, text: 'Togo', code: 'TG'}, 
        {id: 217, text: 'Tokelau', code: 'TK'}, 
        {id: 218, text: 'Tonga', code: 'TO'}, 
        {id: 219, text: 'Trinidad and Tobago', code: 'TT'}, 
        {id: 220, text: 'Tunisia', code: 'TN'}, 
        {id: 221, text: 'Turkey', code: 'TR'}, 
        {id: 222, text: 'Turkmenistan', code: 'TM'}, 
        {id: 223, text: 'Turks and Caicos Islands', code: 'TC'}, 
        {id: 224, text: 'Tuvalu', code: 'TV'}, 
        {id: 225, text: 'Uganda', code: 'UG'}, 
        {id: 226, text: 'Ukraine', code: 'UA'}, 
        {id: 227, text: 'United Arab Emirates', code: 'AE'}, 
        {id: 228, text: 'United Kingdom', code: 'GB'}, 
        {id: 229, text: 'United States', code: 'US'}, 
        {id: 230, text: 'United States Minor Outlying Islands', code: 'UM'}, 
        {id: 231, text: 'Uruguay', code: 'UY'}, 
        {id: 232, text: 'Uzbekistan', code: 'UZ'}, 
        {id: 233, text: 'Vanuatu', code: 'VU'}, 
        {id: 234, text: 'Venezuela', code: 'VE'}, 
        {id: 235, text: 'Viet Nam', code: 'VN'}, 
        {id: 236, text: 'Virgin Islands, British', code: 'VG'}, 
        {id: 237, text: 'Virgin Islands, U.S.', code: 'VI'}, 
        {id: 238, text: 'Wallis and Futuna', code: 'WF'}, 
        {id: 239, text: 'Western Sahara', code: 'EH'}, 
        {id: 240, text: 'Yemen', code: 'YE'}, 
        {id: 241, text: 'Zambia', code: 'ZM'}, 
        {id: 242, text: 'Zimbabwe', code: 'ZW'} 
    ]
}


// if($("#charNum_headline").text((60-$("#headline_input").val())){
//     $("#charNum_headline").text((60-$("#headline_input").val().length))
// };

// $("#headline_input").keyup(function(){
//     el = $(this);
//     if(el.val().length >= 60){
//         el.val( el.val().substr(0, 60) );
//     } else {
//         $("#charNum_headline").text((60-el.val().length)-1);
//     }
// });

// if($("#charNum_description").text((5000-$("#scribe_input").val())){
//     $("#charNum_description").text((5000-$("#scribe_input").val().length));
// };

// $("#charNum_description").text((5000-$("#scribe_input").val().length));
// $("#scribe_input").keyup(function(){
//     el = $(this);
//     if(el.val().length >= 5000){
//         el.val( el.val().substr(0, 5000) );
//     } else {
//         $("#charNum_description").text((5000-el.val().length)-1);
//     }
// });

// $("#charNum_facts_1").text((50-$("#facts_1_input").val().length));
// $("#facts_1_input").keyup(function(){
//     el = $(this);
//     if(el.val().length >= 50){
//         el.val( el.val().substr(0, 50) );
//     } else {
//         $("#charNum_facts_1").text((50-el.val().length)-1);
//     }
// });

// $("#charNum_facts_2").text((50-$("#facts_2_input").val().length));
// $("#facts_2_input").keyup(function(){
//     el = $(this);
//     if(el.val().length >= 50){
//         el.val( el.val().substr(0, 50) );
//     } else {
//         $("#charNum_facts_2").text((50-el.val().length)-1);
//     }
// });


// $("#charNum_facts_3").text((50-$("#facts_3_input").val().length));
// $("#facts_3_input").keyup(function(){
//     el = $(this);
//     if(el.val().length >= 50){
//         el.val( el.val().substr(0, 50) );
//     } else {
//         $("#charNum_facts_3").text((50-el.val().length)-1);
//     }
// });

function validateEmail(form) {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        form.email.focus();
        $('.errorForm').remove();
        $('#errordiv').append('<div style="position:absolute;top:-4px;font-weight: normal;" class="errorForm">Enter a valid email address</div>');
        $('.errorForm').delay(2000).queue(function(next){$(this).hide();next();});
        console.log("err")
        return false
    };
};

function validateForm(form) {
    // if (form.category.value == ""){
    //     form.category.focus();
    //     $('#category').append('<span class="errorForm">Please select a category</span>');
    //     $('.errorForm').delay(2000).queue(function(next){$(this).hide();next();});
    //     return false
    // };
    if (form.headline.value == ""){
        form.headline.focus();
        $('#headline').append('<span class="errorForm">Please insert an headline</span>')
        $('.errorForm').delay(2000).queue(function(next){$(this).hide();next();});
        return false
    };
    // if (form.author.value == ""){
    //     form.author.focus();
    //     $('#author').append('<span class="errorForm">Please insert an author</span>')
    //     $('.errorForm').delay(2000).queue(function(next){$(this).hide();next();});
    //     return false
    // };
    // if (form.date.value == ""){
    //     form.date.focus();
    //     $('#publishingDate').append('<span class="errorForm">Please insert a publishing date</span>')
    //     $('.errorForm').delay(2000).queue(function(next){$(this).hide();next();});
    //     return false
    // };
};





if($("#sponsorMessage_input").val()){
    $("#charNum_sponsorMessage").text((200-$("#sponsorMessage_input").val().length));
};
$("#sponsorMessage_input").keyup(function(){
    el = $(this);
    if(el.val().length >= 200){
        el.val( el.val().substr(0, 200) );
    } else {
        $("#charNum_sponsorMessage").text((200-el.val().length)-1);
    }
});
















