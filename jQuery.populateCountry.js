  /**
  * jQuery populateCountry plugin
  * it only do one thing - return options tag contains world countries name
  * credit: http://www.liewcf.com/javascript-world-country-list-89/ 
  * i only turn it into plugin.
  * - Weldan Jamili <mweldan@gmail.com> http://mweldan.com
  *
  * Usage: $("#element").populateCountry();
  **/
  (function($){
      $.fn.populateCountry = function() {
        var _this = $(this);
        if (!_this.is("select")){
            var _error = "ERROR: jQuery populateCountry plugin only accept select element";
        }else {
            var _countries = new Array("AFGHANISTAN","ALBANIA","ALGERIA","AMERICAN SAMOA","ANDORRA","ANGOLA","ANGUILLA","ANTARCTICA","ANTIGUA AND BARBUDA","ARGENTINA","ARMENIA","ARUBA","AUSTRALIA","AUSTRIA","AZERBAIJAN","BAHAMAS","BAHRAIN","BANGLADESH","BARBADOS","BELARUS","BELGIUM","BELIZE","BENIN","BERMUDA","BHUTAN","BOLIVIA","BOSNIA AND HERZEGOWINA","BOTSWANA","BOUVET ISLAND","BRAZIL","BRITISH INDIAN OCEAN TERRITORY","BRUNEI DARUSSALAM","BULGARIA","BURKINA FASO","BURUNDI","CAMBODIA","CAMEROON","CANADA","CAPE VERDE","CAYMAN ISLANDS","CENTRAL AFRICAN REPUBLIC","CHAD","CHILE","CHINA","CHRISTMAS ISLAND","COCOS (KEELING) ISLANDS","COLOMBIA","COMOROS","CONGO","CONGO, THE DEMOCRATIC REPUBLIC OF THE","COOK ISLANDS","COSTA RICA","COTE D'IVOIRE","CROATIA (local name: Hrvatska)","CUBA","CYPRUS","CZECH REPUBLIC","DENMARK","DJIBOUTI","DOMINICA","DOMINICAN REPUBLIC","EAST TIMOR","ECUADOR","EGYPT","EL SALVADOR","EQUATORIAL GUINEA","ERITREA","ESTONIA","ETHIOPIA","FALKLAND ISLANDS (MALVINAS)","FAROE ISLANDS","FIJI","FINLAND","FRANCE","FRANCE, METROPOLITAN","FRENCH GUIANA","FRENCH POLYNESIA","FRENCH SOUTHERN TERRITORIES","GABON","GAMBIA","GEORGIA","GERMANY","GHANA","GIBRALTAR","GREECE","GREENLAND","GRENADA","GUADELOUPE","GUAM","GUATEMALA","GUINEA","GUINEA-BISSAU","GUYANA","HAITI","HEARD AND MC DONALD ISLANDS","HOLY SEE (VATICAN CITY STATE)","HONDURAS","HONG KONG","HUNGARY","ICELAND","INDIA","INDONESIA","IRAN (ISLAMIC REPUBLIC OF)","IRAQ","IRELAND","ISRAEL","ITALY","JAMAICA","JAPAN","JORDAN","KAZAKHSTAN","KENYA","KIRIBATI","KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF","KOREA, REPUBLIC OF","KUWAIT","KYRGYZSTAN","LAO PEOPLE'S DEMOCRATIC REPUBLIC","LATVIA","LEBANON","LESOTHO","LIBERIA","LIBYAN ARAB JAMAHIRIYA","LIECHTENSTEIN","LITHUANIA","LUXEMBOURG","MACAU","MACEDONIA, THE FORMER YUGOSLAV REPUBLIC","MADAGASCAR","MALAWI","MALAYSIA","MALDIVES","MALI","MALTA","MARSHALL ISLANDS","MARTINIQUE","MAURITANIA","MAURITIUS","MAYOTTE","MEXICO","MICRONESIA, FEDERATED STATES OF","MOLDOVA, REPUBLIC OF","MONACO","MONGOLIA","MONTSERRAT","MOROCCO","MOZAMBIQUE","MYANMAR (Burma)","NAMIBIA","NAURU","NEPAL","NETHERLANDS","NETHERLANDS ANTILLES","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NIGER","NIGERIA","NIUE","NORFOLK ISLAND","NORTHERN MARIANA ISLANDS","NORWAY","OMAN","PAKISTAN","PALAU","PANAMA","PAPUA NEW GUINEA","PARAGUAY","PERU","PHILIPPINES","PITCAIRN","POLAND","PORTUGAL","PUERTO RICO","QATAR","REUNION","ROMANIA","RUSSIAN FEDERATION","RWANDA","SAINT KITTS AND NEVIS","SAINT LUCIA","SAINT VINCENT AND THE GRENADINES","SAMOA","SAN MARINO","SAO TOME AND PRINCIPE","SAUDI ARABIA","SENEGAL","SEYCHELLES","SIERRA LEONE","SINGAPORE","SLOVAKIA (Slovak Republic)","SLOVENIA","SOLOMON ISLANDS","SOMALIA","SOUTH AFRICA","SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS","SPAIN","SRI LANKA","ST. HELENA","ST. PIERRE AND MIQUELON","SUDAN","SURINAME","SVALBARD AND JAN MAYEN ISLANDS","SWAZILAND","SWEDEN","SWITZERLAND","SYRIAN ARAB REPUBLIC","TAIWAN, PROVINCE OF CHINA","TAJIKISTAN","TANZANIA, UNITED REPUBLIC OF","THAILAND","TOGO","TOKELAU","TONGA","TRINIDAD AND TOBAGO","TUNISIA","TURKEY","TURKMENISTAN","TURKS AND CAICOS ISLANDS","TUVALU","UGANDA","UKRAINE","UNITED ARAB EMIRATES","UNITED KINGDOM","UNITED STATES","UNITED STATES MINOR OUTLYING ISLANDS","URUGUAY","UZBEKISTAN","VANUATU","VENEZUELA","VIET NAM","VIRGIN ISLANDS (BRITISH)","VIRGIN ISLANDS (U.S.)","WALLIS AND FUTUNA ISLANDS","WESTERN SAHARA","YEMEN","YUGOSLAVIA (now Serbia and Montenegro)","ZAMBIA","ZIMBABWE");
            var _result = "";
            for(i=0;i<_countries.length;i++){
                _result = _result+'<option value="'+_countries[i]+'">'+_countries[i]+'</option>';
            }
        }
        if (_error){
            return console.log(_error);
        }
        if (_result != ""){
            return _this.html(_result);
        }
    }
  })(jQuery);
