$(function() {

    /**** MAP ****/
    var latlong = {};
        latlong["AD"] = {
            "latitude": 42.5,
            "longitude": 1.5
        };
        latlong["AE"] = {
            "latitude": 24,
            "longitude": 54
        };
        latlong["AF"] = {
            "latitude": 33,
            "longitude": 65
        };
        latlong["AG"] = {
            "latitude": 17.05,
            "longitude": -61.8
        };
        latlong["AI"] = {
            "latitude": 18.25,
            "longitude": -63.1667
        };
        latlong["AL"] = {
            "latitude": 41,
            "longitude": 20
        };
        latlong["AM"] = {
            "latitude": 40,
            "longitude": 45
        };
        latlong["AN"] = {
            "latitude": 12.25,
            "longitude": -68.75
        };
        latlong["AO"] = {
            "latitude": -12.5,
            "longitude": 18.5
        };
        latlong["AP"] = {
            "latitude": 35,
            "longitude": 105
        };
        latlong["AQ"] = {
            "latitude": -90,
            "longitude": 0
        };
        latlong["AR"] = {
            "latitude": -34,
            "longitude": -64
        };
        latlong["AS"] = {
            "latitude": -14.3333,
            "longitude": -170
        };
        latlong["AT"] = {
            "latitude": 47.3333,
            "longitude": 13.3333
        };
        latlong["AU"] = {
            "latitude": -27,
            "longitude": 133
        };
        latlong["AW"] = {
            "latitude": 12.5,
            "longitude": -69.9667
        };
        latlong["AZ"] = {
            "latitude": 40.5,
            "longitude": 47.5
        };
        latlong["BA"] = {
            "latitude": 44,
            "longitude": 18
        };
        latlong["BB"] = {
            "latitude": 13.1667,
            "longitude": -59.5333
        };
        latlong["BD"] = {
            "latitude": 24,
            "longitude": 90
        };
        latlong["BE"] = {
            "latitude": 50.8333,
            "longitude": 4
        };
        latlong["BF"] = {
            "latitude": 13,
            "longitude": -2
        };
        latlong["BG"] = {
            "latitude": 43,
            "longitude": 25
        };
        latlong["BH"] = {
            "latitude": 26,
            "longitude": 50.55
        };
        latlong["BI"] = {
            "latitude": -3.5,
            "longitude": 30
        };
        latlong["BJ"] = {
            "latitude": 9.5,
            "longitude": 2.25
        };
        latlong["BM"] = {
            "latitude": 32.3333,
            "longitude": -64.75
        };
        latlong["BN"] = {
            "latitude": 4.5,
            "longitude": 114.6667
        };
        latlong["Blumenau"] = {
            "latitude": -5,
            "longitude": -49
        };
        latlong["FLN"] = {
            "latitude": -15,
            "longitude": -36
        };
        latlong["VEND_001"] = {
            "latitude": -15,
            "longitude": -37
        };
        latlong["VEND_002"] = {
            "latitude": -17,
            "longitude": -42
        };
        latlong["BS"] = {
            "latitude": 24.25,
            "longitude": -76
        };
        latlong["BT"] = {
            "latitude": 27.5,
            "longitude": 90.5
        };
        latlong["BV"] = {
            "latitude": -54.4333,
            "longitude": 3.4
        };
        latlong["BW"] = {
            "latitude": -22,
            "longitude": 24
        };
        latlong["BY"] = {
            "latitude": 53,
            "longitude": 28
        };
        latlong["BZ"] = {
            "latitude": 17.25,
            "longitude": -88.75
        };
        latlong["CA"] = {
            "latitude": 54,
            "longitude": -100
        };
        latlong["CC"] = {
            "latitude": -12.5,
            "longitude": 96.8333
        };
        latlong["CD"] = {
            "latitude": 0,
            "longitude": 25
        };
        latlong["CF"] = {
            "latitude": 7,
            "longitude": 21
        };
        latlong["CG"] = {
            "latitude": -1,
            "longitude": 15
        };
        latlong["CH"] = {
            "latitude": 47,
            "longitude": 8
        };
        latlong["CI"] = {
            "latitude": 8,
            "longitude": -5
        };
        latlong["CK"] = {
            "latitude": -21.2333,
            "longitude": -159.7667
        };
        latlong["CL"] = {
            "latitude": -30,
            "longitude": -71
        };
        latlong["CM"] = {
            "latitude": 6,
            "longitude": 12
        };
        latlong["CN"] = {
            "latitude": 35,
            "longitude": 105
        };
        latlong["CO"] = {
            "latitude": 4,
            "longitude": -72
        };
        latlong["CR"] = {
            "latitude": 10,
            "longitude": -84
        };
        latlong["CU"] = {
            "latitude": 21.5,
            "longitude": -80
        };
        latlong["CV"] = {
            "latitude": 16,
            "longitude": -24
        };
        latlong["CX"] = {
            "latitude": -10.5,
            "longitude": 105.6667
        };
        latlong["CY"] = {
            "latitude": 35,
            "longitude": 33
        };
        latlong["CZ"] = {
            "latitude": 49.75,
            "longitude": 15.5
        };
        latlong["DE"] = {
            "latitude": 51,
            "longitude": 9
        };
        latlong["DJ"] = {
            "latitude": 11.5,
            "longitude": 43
        };
        latlong["DK"] = {
            "latitude": 56,
            "longitude": 10
        };
        latlong["DM"] = {
            "latitude": 15.4167,
            "longitude": -61.3333
        };
        latlong["DO"] = {
            "latitude": 19,
            "longitude": -70.6667
        };
        latlong["DZ"] = {
            "latitude": 28,
            "longitude": 3
        };
        latlong["EC"] = {
            "latitude": -2,
            "longitude": -77.5
        };
        latlong["EE"] = {
            "latitude": 59,
            "longitude": 26
        };
        latlong["EG"] = {
            "latitude": 27,
            "longitude": 30
        };
        latlong["EH"] = {
            "latitude": 24.5,
            "longitude": -13
        };
        latlong["ER"] = {
            "latitude": 15,
            "longitude": 39
        };
        latlong["ES"] = {
            "latitude": 40,
            "longitude": -4
        };
        latlong["ET"] = {
            "latitude": 8,
            "longitude": 38
        };
        latlong["EU"] = {
            "latitude": 47,
            "longitude": 8
        };
        latlong["FI"] = {
            "latitude": 62,
            "longitude": 26
        };
        latlong["FJ"] = {
            "latitude": -18,
            "longitude": 175
        };
        latlong["FK"] = {
            "latitude": -51.75,
            "longitude": -59
        };
        latlong["FM"] = {
            "latitude": 6.9167,
            "longitude": 158.25
        };
        latlong["FO"] = {
            "latitude": 62,
            "longitude": -7
        };
        latlong["FR"] = {
            "latitude": 46,
            "longitude": 2
        };
        latlong["GA"] = {
            "latitude": -1,
            "longitude": 11.75
        };
        latlong["GB"] = {
            "latitude": 54,
            "longitude": -2
        };
        latlong["GD"] = {
            "latitude": 12.1167,
            "longitude": -61.6667
        };
        latlong["GE"] = {
            "latitude": 42,
            "longitude": 43.5
        };
        latlong["GF"] = {
            "latitude": 4,
            "longitude": -53
        };
        latlong["GH"] = {
            "latitude": 8,
            "longitude": -2
        };
        latlong["GI"] = {
            "latitude": 36.1833,
            "longitude": -5.3667
        };
        latlong["GL"] = {
            "latitude": 72,
            "longitude": -40
        };
        latlong["GM"] = {
            "latitude": 13.4667,
            "longitude": -16.5667
        };
        latlong["GN"] = {
            "latitude": 11,
            "longitude": -10
        };
        latlong["GP"] = {
            "latitude": 16.25,
            "longitude": -61.5833
        };
        latlong["GQ"] = {
            "latitude": 2,
            "longitude": 10
        };
        latlong["GR"] = {
            "latitude": 39,
            "longitude": 22
        };
        latlong["GS"] = {
            "latitude": -54.5,
            "longitude": -37
        };
        latlong["GT"] = {
            "latitude": 15.5,
            "longitude": -90.25
        };
        latlong["GU"] = {
            "latitude": 13.4667,
            "longitude": 144.7833
        };
        latlong["GW"] = {
            "latitude": 12,
            "longitude": -15
        };
        latlong["GY"] = {
            "latitude": 5,
            "longitude": -59
        };
        latlong["HK"] = {
            "latitude": 22.25,
            "longitude": 114.1667
        };
        latlong["HM"] = {
            "latitude": -53.1,
            "longitude": 72.5167
        };
        latlong["HN"] = {
            "latitude": 15,
            "longitude": -86.5
        };
        latlong["HR"] = {
            "latitude": 45.1667,
            "longitude": 15.5
        };
        latlong["HT"] = {
            "latitude": 19,
            "longitude": -72.4167
        };
        latlong["HU"] = {
            "latitude": 47,
            "longitude": 20
        };
        latlong["ID"] = {
            "latitude": -5,
            "longitude": 120
        };
        latlong["IE"] = {
            "latitude": 53,
            "longitude": -8
        };
        latlong["IL"] = {
            "latitude": 31.5,
            "longitude": 34.75
        };
        latlong["IN"] = {
            "latitude": 20,
            "longitude": 77
        };
        latlong["IO"] = {
            "latitude": -6,
            "longitude": 71.5
        };
        latlong["IQ"] = {
            "latitude": 33,
            "longitude": 44
        };
        latlong["IR"] = {
            "latitude": 32,
            "longitude": 53
        };
        latlong["IS"] = {
            "latitude": 65,
            "longitude": -18
        };
        latlong["IT"] = {
            "latitude": 42.8333,
            "longitude": 12.8333
        };
        latlong["JM"] = {
            "latitude": 18.25,
            "longitude": -77.5
        };
        latlong["JO"] = {
            "latitude": 31,
            "longitude": 36
        };
        latlong["JP"] = {
            "latitude": 36,
            "longitude": 138
        };
        latlong["KE"] = {
            "latitude": 1,
            "longitude": 38
        };
        latlong["KG"] = {
            "latitude": 41,
            "longitude": 75
        };
        latlong["KH"] = {
            "latitude": 13,
            "longitude": 105
        };
        latlong["KI"] = {
            "latitude": 1.4167,
            "longitude": 173
        };
        latlong["KM"] = {
            "latitude": -12.1667,
            "longitude": 44.25
        };
        latlong["KN"] = {
            "latitude": 17.3333,
            "longitude": -62.75
        };
        latlong["KP"] = {
            "latitude": 40,
            "longitude": 127
        };
        latlong["KR"] = {
            "latitude": 37,
            "longitude": 127.5
        };
        latlong["KW"] = {
            "latitude": 29.3375,
            "longitude": 47.6581
        };
        latlong["KY"] = {
            "latitude": 19.5,
            "longitude": -80.5
        };
        latlong["KZ"] = {
            "latitude": 48,
            "longitude": 68
        };
        latlong["LA"] = {
            "latitude": 18,
            "longitude": 105
        };
        latlong["LB"] = {
            "latitude": 33.8333,
            "longitude": 35.8333
        };
        latlong["LC"] = {
            "latitude": 13.8833,
            "longitude": -61.1333
        };
        latlong["LI"] = {
            "latitude": 47.1667,
            "longitude": 9.5333
        };
        latlong["LK"] = {
            "latitude": 7,
            "longitude": 81
        };
        latlong["LR"] = {
            "latitude": 6.5,
            "longitude": -9.5
        };
        latlong["LS"] = {
            "latitude": -29.5,
            "longitude": 28.5
        };
        latlong["LT"] = {
            "latitude": 55,
            "longitude": 24
        };
        latlong["LU"] = {
            "latitude": 49.75,
            "longitude": 6
        };
        latlong["LV"] = {
            "latitude": 57,
            "longitude": 25
        };
        latlong["LY"] = {
            "latitude": 25,
            "longitude": 17
        };
        latlong["MA"] = {
            "latitude": 32,
            "longitude": -5
        };
        latlong["MC"] = {
            "latitude": 43.7333,
            "longitude": 7.4
        };
        latlong["MD"] = {
            "latitude": 47,
            "longitude": 29
        };
        latlong["ME"] = {
            "latitude": 42.5,
            "longitude": 19.4
        };
        latlong["MG"] = {
            "latitude": -20,
            "longitude": 47
        };
        latlong["MH"] = {
            "latitude": 9,
            "longitude": 168
        };
        latlong["MK"] = {
            "latitude": 41.8333,
            "longitude": 22
        };
        latlong["ML"] = {
            "latitude": 17,
            "longitude": -4
        };
        latlong["MM"] = {
            "latitude": 22,
            "longitude": 98
        };
        latlong["MN"] = {
            "latitude": 46,
            "longitude": 105
        };
        latlong["MO"] = {
            "latitude": 22.1667,
            "longitude": 113.55
        };
        latlong["MP"] = {
            "latitude": 15.2,
            "longitude": 145.75
        };
        latlong["MQ"] = {
            "latitude": 14.6667,
            "longitude": -61
        };
        latlong["MR"] = {
            "latitude": 20,
            "longitude": -12
        };
        latlong["MS"] = {
            "latitude": 16.75,
            "longitude": -62.2
        };
        latlong["MT"] = {
            "latitude": 35.8333,
            "longitude": 14.5833
        };
        latlong["MU"] = {
            "latitude": -20.2833,
            "longitude": 57.55
        };
        latlong["MV"] = {
            "latitude": 3.25,
            "longitude": 73
        };
        latlong["MW"] = {
            "latitude": -13.5,
            "longitude": 34
        };
        latlong["MX"] = {
            "latitude": 23,
            "longitude": -102
        };
        latlong["MY"] = {
            "latitude": 2.5,
            "longitude": 112.5
        };
        latlong["MZ"] = {
            "latitude": -18.25,
            "longitude": 35
        };
        latlong["NA"] = {
            "latitude": -22,
            "longitude": 17
        };
        latlong["NC"] = {
            "latitude": -21.5,
            "longitude": 165.5
        };
        latlong["NE"] = {
            "latitude": 16,
            "longitude": 8
        };
        latlong["NF"] = {
            "latitude": -29.0333,
            "longitude": 167.95
        };
        latlong["NG"] = {
            "latitude": 10,
            "longitude": 8
        };
        latlong["NI"] = {
            "latitude": 13,
            "longitude": -85
        };
        latlong["NL"] = {
            "latitude": 52.5,
            "longitude": 5.75
        };
        latlong["NO"] = {
            "latitude": 62,
            "longitude": 10
        };
        latlong["NP"] = {
            "latitude": 28,
            "longitude": 84
        };
        latlong["NR"] = {
            "latitude": -0.5333,
            "longitude": 166.9167
        };
        latlong["NU"] = {
            "latitude": -19.0333,
            "longitude": -169.8667
        };
        latlong["NZ"] = {
            "latitude": -41,
            "longitude": 174
        };
        latlong["OM"] = {
            "latitude": 21,
            "longitude": 57
        };
        latlong["PA"] = {
            "latitude": 9,
            "longitude": -80
        };
        latlong["PE"] = {
            "latitude": -10,
            "longitude": -76
        };
        latlong["PF"] = {
            "latitude": -15,
            "longitude": -140
        };
        latlong["PG"] = {
            "latitude": -6,
            "longitude": 147
        };
        latlong["PH"] = {
            "latitude": 13,
            "longitude": 122
        };
        latlong["PK"] = {
            "latitude": 30,
            "longitude": 70
        };
        latlong["PL"] = {
            "latitude": 52,
            "longitude": 20
        };
        latlong["PM"] = {
            "latitude": 46.8333,
            "longitude": -56.3333
        };
        latlong["PR"] = {
            "latitude": 18.25,
            "longitude": -66.5
        };
        latlong["PS"] = {
            "latitude": 32,
            "longitude": 35.25
        };
        latlong["PT"] = {
            "latitude": 39.5,
            "longitude": -8
        };
        latlong["PW"] = {
            "latitude": 7.5,
            "longitude": 134.5
        };
        latlong["PY"] = {
            "latitude": -23,
            "longitude": -58
        };
        latlong["QA"] = {
            "latitude": 25.5,
            "longitude": 51.25
        };
        latlong["RE"] = {
            "latitude": -21.1,
            "longitude": 55.6
        };
        latlong["RO"] = {
            "latitude": 46,
            "longitude": 25
        };
        latlong["RS"] = {
            "latitude": 44,
            "longitude": 21
        };
        latlong["RU"] = {
            "latitude": 60,
            "longitude": 100
        };
        latlong["RW"] = {
            "latitude": -2,
            "longitude": 30
        };
        latlong["SA"] = {
            "latitude": 25,
            "longitude": 45
        };
        latlong["SB"] = {
            "latitude": -8,
            "longitude": 159
        };
        latlong["SC"] = {
            "latitude": -4.5833,
            "longitude": 55.6667
        };
        latlong["SD"] = {
            "latitude": 15,
            "longitude": 30
        };
        latlong["SE"] = {
            "latitude": 62,
            "longitude": 15
        };
        latlong["SG"] = {
            "latitude": 1.3667,
            "longitude": 103.8
        };
        latlong["SH"] = {
            "latitude": -15.9333,
            "longitude": -5.7
        };
        latlong["SI"] = {
            "latitude": 46,
            "longitude": 15
        };
        latlong["SJ"] = {
            "latitude": 78,
            "longitude": 20
        };
        latlong["SK"] = {
            "latitude": 48.6667,
            "longitude": 19.5
        };
        latlong["SL"] = {
            "latitude": 8.5,
            "longitude": -11.5
        };
        latlong["SM"] = {
            "latitude": 43.7667,
            "longitude": 12.4167
        };
        latlong["SN"] = {
            "latitude": 14,
            "longitude": -14
        };
        latlong["SO"] = {
            "latitude": 10,
            "longitude": 49
        };
        latlong["SR"] = {
            "latitude": 4,
            "longitude": -56
        };
        latlong["ST"] = {
            "latitude": 1,
            "longitude": 7
        };
        latlong["SV"] = {
            "latitude": 13.8333,
            "longitude": -88.9167
        };
        latlong["SY"] = {
            "latitude": 35,
            "longitude": 38
        };
        latlong["SZ"] = {
            "latitude": -26.5,
            "longitude": 31.5
        };
        latlong["TC"] = {
            "latitude": 21.75,
            "longitude": -71.5833
        };
        latlong["TD"] = {
            "latitude": 15,
            "longitude": 19
        };
        latlong["TF"] = {
            "latitude": -43,
            "longitude": 67
        };
        latlong["TG"] = {
            "latitude": 8,
            "longitude": 1.1667
        };
        latlong["TH"] = {
            "latitude": 15,
            "longitude": 100
        };
        latlong["TJ"] = {
            "latitude": 39,
            "longitude": 71
        };
        latlong["TK"] = {
            "latitude": -9,
            "longitude": -172
        };
        latlong["TM"] = {
            "latitude": 40,
            "longitude": 60
        };
        latlong["TN"] = {
            "latitude": 34,
            "longitude": 9
        };
        latlong["TO"] = {
            "latitude": -20,
            "longitude": -175
        };
        latlong["TR"] = {
            "latitude": 39,
            "longitude": 35
        };
        latlong["TT"] = {
            "latitude": 11,
            "longitude": -61
        };
        latlong["TV"] = {
            "latitude": -8,
            "longitude": 178
        };
        latlong["TW"] = {
            "latitude": 23.5,
            "longitude": 121
        };
        latlong["TZ"] = {
            "latitude": -6,
            "longitude": 35
        };
        latlong["UA"] = {
            "latitude": 49,
            "longitude": 32
        };
        latlong["UG"] = {
            "latitude": 1,
            "longitude": 32
        };
        latlong["UM"] = {
            "latitude": 19.2833,
            "longitude": 166.6
        };
        latlong["US"] = {
            "latitude": 38,
            "longitude": -97
        };
        latlong["UY"] = {
            "latitude": -33,
            "longitude": -56
        };
        latlong["UZ"] = {
            "latitude": 41,
            "longitude": 64
        };
        latlong["VA"] = {
            "latitude": 41.9,
            "longitude": 12.45
        };
        latlong["VC"] = {
            "latitude": 13.25,
            "longitude": -61.2
        };
        latlong["VE"] = {
            "latitude": 8,
            "longitude": -66
        };
        latlong["VG"] = {
            "latitude": 18.5,
            "longitude": -64.5
        };
        latlong["VI"] = {
            "latitude": 18.3333,
            "longitude": -64.8333
        };
        latlong["VN"] = {
            "latitude": 16,
            "longitude": 106
        };
        latlong["VU"] = {
            "latitude": -16,
            "longitude": 167
        };
        latlong["WF"] = {
            "latitude": -13.3,
            "longitude": -176.2
        };
        latlong["WS"] = {
            "latitude": -13.5833,
            "longitude": -172.3333
        };
        latlong["YE"] = {
            "latitude": 15,
            "longitude": 48
        };
        latlong["YT"] = {
            "latitude": -12.8333,
            "longitude": 45.1667
        };
        latlong["ZA"] = {
            "latitude": -29,
            "longitude": 24
        };
        latlong["ZM"] = {
            "latitude": -15,
            "longitude": 30
        };
        latlong["ZW"] = {
            "latitude": -20,
            "longitude": 30
        };
    var mapData = [
        {
            "code": "FLN",
            "name": "5 Vendas",
            "color": "#a91e15"
        },
        {
            "code": "VEND_001",
            "name": "2 Vendas",
            "color": "#86a965"
        },
        {
            "code": "VEND_002",
            "name": "1 Venda",
            "color": "#86a965"
        },
        {
            "code": "Blumenau",
            "name": "1 Venda",
            "color": "#86a965"
        },


    ];
    var map;
    var minBulletSize = 3;
    var maxBulletSize = 70;
    var min = Infinity;
    var max = -Infinity;
    

    // AmCharts.theme = AmCharts.themes.black;  // MODIF

    // get min and max values
    for (var i = 0; i < mapData.length; i++) {
        var value = mapData[i].value;
        if (value < min) {
            min = value;
        }
        if (value > max) {
            max = value;
        }
    }

    // it's better to use circle square to show difference between values, not a radius
    var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
    var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

    /* Adapt Control Position if RTL or not */

    function generateZoomControl(color) {
        if (color == null) color = "#39B0CA";
        var chartData = {
            "buttonFillColor": color,
            top: 60,
            left: $('body').hasClass('rtl') ? 'auto' : 20,
            right: $('body').hasClass('rtl') ? 20 : 'auto'
        }
        return chartData;
    }

    // build map
    function brazilMap(){

        var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
        var dataProvider = {
                                    mapVar: AmCharts.maps.brazilLow,
                                    images: [],
                                    selectable: true,
                                    images: []
                            }
        var images = [];
        for (var i = 0; i < mapData.length; i++) {
            var dataItem = mapData[i];
            var value = dataItem.value;
            // calculate size of a bubble
            var size = (value - min) / (max - min) * (maxBulletSize - minBulletSize) + minBulletSize;
            if (size < minBulletSize) {
                size = minBulletSize;
            }
            var id = dataItem.code;
            dataProvider.images.push({
                type: "circle",
                width: size,
                height: size,
                color: dataItem.color,
                longitude: latlong[id].longitude,
                latitude: latlong[id].latitude,
                title: dataItem.name,
                value: value
            });
        }
        var map = AmCharts.makeChart( "map", {
          "type": "map",
          "theme": "dark",
          "areasSettings": {
            "unlistedAreasColor": "#fff",
            "unlistedAreasAlpha": 0.1,
            "unlistedAreasOutlineColor":"rgba(255,255,255,0.2)"
          },
          "imagesSettings": {
            "balloonText": "<span style='font-size:14px;'><b>[[title]]</b> [[value]]</span>",
            "alpha": 0.6
          },
          "dataProvider": dataProvider,
           "objectList": {
            "container": "listdiv"
          },
          "showImagesInList" : true,
          "zoomControl": {
                "homeButtonEnabled": false,
                "top": 60
            }
        } );
        $('#listdiv').mCustomScrollbar({
            scrollButtons: {
                enable: false
            },
            autoHideScrollbar: false,
            scrollInertia: 150,
            theme: "light-thin",
            set_height: 440,
            advanced: {
                updateOnContentResize: true
            }
        });


    }

    if($('#map').length){
        brazilMap();
    }
    
    $(document).on("click", ".panel-header .panel-maximize", function(event) {
        var panel = $(this).parents(".panel:first");
        if (panel.hasClass("maximized")) {
            map.invalidateSize();
        }
        else {
            map.invalidateSize();
        }
    });

    /**** FINANCIAL CHARTS: HIGHSTOCK ****/
    var data1 = [[1294012800000,34.32],[1294099200000,33.94],[1294185600000,34.46],[1294272000000,34.86],[1294358400000,34.93],[1294617600000,34.73],[1294704000000,35.07],[1294790400000,34.86],[1294876800000,35.38],[1294963200000,35.43],[1295308800000,36.17],[1295395200000,35.55],[1295481600000,35.72],[1295568000000,36.1],[1295827200000,36.29],[1295913600000,35.95],[1296000000000,36.39],[1296086400000,36.82],[1296172800000,36],[1296432000000,35.86],[1296518400000,36.29],[1296604800000,35.52],[1296691200000,35.39],[1296777600000,36.56],[1297036800000,36.48],[1297123200000,36.56],[1297209600000,36.67],[1297296000000,36.71],[1297382400000,36.66],[1297641600000,36.87],[1297728000000,36.6],[1297814400000,36.37],[1297900800000,37.43],[1297987200000,37.79],[1298332800000,37.4],[1298419200000,36.84],[1298505600000,36.73],[1298592000000,37.39],[1298851200000,37.91],[1298937600000,37.31],[1299024000000,37.16],[1299110400000,37.61],[1299196800000,37.67],[1299456000000,37.3],[1299542400000,37.55],[1299628800000,38.45],[1299715200000,37.54],[1299801600000,37.02],[1300060800000,36.62],[1300147200000,36.44],[1300233600000,36.6],[1300320000000,36.62],[1300406400000,37.3],[1300665600000,37.85],[1300752000000,38.3],[1300838400000,38.15],[1300924800000,39.06],[1301011200000,39.29],[1301270400000,39.38],[1301356800000,39.73],[1301443200000,39.46],[1301529600000,39.56],[1301616000000,40.35],[1301875200000,40.57],[1301961600000,40.58],[1302048000000,40.57],[1302134400000,40.58],[1302220800000,40.2],[1302480000000,40.14],[1302566400000,39.6],[1302652800000,39.65],[1302739200000,39.64],[1302825600000,39.59],[1303084800000,39.5],[1303171200000,39.77],[1303257600000,40.49],[1303344000000,40.55],[1303689600000,40.96],[1303776000000,41.08],[1303862400000,42.03],[1303948800000,41],[1304035200000,40.64],[1304294400000,41.17],[1304380800000,41.15],[1304467200000,40.76],[1304553600000,41.03],[1304640000000,41.47],[1304899200000,42.22],[1304985600000,42.31],[1305072000000,42.21],[1305158400000,42.44],[1305244800000,42.04],[1305504000000,42.27],[1305590400000,42.04],[1305676800000,41.84],[1305763200000,41.83],[1305849600000,41.59],[1306108800000,41.35],[1306195200000,40.91],[1306281600000,41.52],[1306368000000,41.43],[1306454400000,41.06],[1306800000000,41.22],[1306886400000,40.71],[1306972800000,40.75],[1307059200000,40.35],[1307318400000,40.45],[1307404800000,40.91],[1307491200000,40.97],[1307577600000,41.54],[1307664000000,41.12],[1307923200000,40.8],[1308009600000,41.24],[1308096000000,41.04],[1308182400000,41.06],[1308268800000,41],[1308528000000,41.39],[1308614400000,41.58],[1308700800000,41.23],[1308787200000,41.31],[1308873600000,40.14],[1309132800000,40.65],[1309219200000,41.4],[1309305600000,41.09],[1309392000000,41.4],[1309478400000,42.12],[1309824000000,42.28],[1309910400000,43.09],[1309996800000,43.05],[1310083200000,42.65],[1310342400000,42.31],[1310428800000,42.28],[1310515200000,42.32],[1310601600000,42.22],[1310688000000,41.99],[1310947200000,41.2],[1311033600000,41.85],[1311120000000,41.75],[1311206400000,39.26],[1311292800000,40.52],[1311552000000,40.35],[1311638400000,39.93],[1311724800000,39.01],[1311811200000,38.72],[1311897600000,38.31],[1312156800000,37.73],[1312243200000,37.73],[1312329600000,38.16],[1312416000000,36.26],[1312502400000,36.81],[1312761600000,34.63],[1312848000000,36.63],[1312934400000,35.24],[1313020800000,37.44],[1313107200000,38.3],[1313366400000,38.89],[1313452800000,38.5],[1313539200000,38.69],[1313625600000,37.69],[1313712000000,37.54],[1313971200000,37.39],[1314057600000,38.26],[1314144000000,38.19],[1314230400000,37.58],[1314316800000,38.48],[1314576000000,39.23],[1314662400000,39.27],[1314748800000,39.58],[1314835200000,39.48],[1314921600000,38.81],[1315267200000,39.07],[1315353600000,39.97],[1315440000000,39.74],[1315526400000,38.4],[1315785600000,38.08],[1315872000000,38.52],[1315958400000,39.17],[1316044800000,38.58],[1316131200000,39.31],[1316390400000,39.41],[1316476800000,39.69],[1316563200000,38.37],[1316649600000,38],[1316736000000,37.76],[1316995200000,38.91],[1317081600000,39.16],[1317168000000,38.6],[1317254400000,37.72],[1317340800000,37.27],[1317600000000,35.74],[1317686400000,35.92],[1317772800000,36.38],[1317859200000,36.1],[1317945600000,35.78],[1318204800000,37.08],[1318291200000,37.01],[1318377600000,37.62],[1318464000000,37.94],[1318550400000,38.18],[1318809600000,37.89],[1318896000000,38.36],[1318982400000,38.19],[1319068800000,38.75],[1319155200000,39.71],[1319414400000,40.65],[1319500800000,39.6],[1319587200000,40.9],[1319673600000,41.98],[1319760000000,42.08],[1320019200000,40.8],[1320105600000,40.04],[1320192000000,39.87],[1320278400000,39.92],[1320364800000,39.22],[1320624000000,39.72],[1320710400000,39.58],[1320796800000,38.23],[1320883200000,38.73],[1320969600000,39.67],[1321228800000,39.19],[1321315200000,39.35],[1321401600000,38.08],[1321488000000,37.52],[1321574400000,37.28],[1321833600000,36.72],[1321920000000,36.63],[1322006400000,36.37],[1322179200000,35.98],[1322438400000,36.44],[1322524800000,36.38],[1322611200000,37.15],[1322697600000,37.24],[1322784000000,37.01],[1323043200000,36.61],[1323129600000,36.44],[1323216000000,36.59],[1323302400000,36.28],[1323388800000,36.37],[1323648000000,35.84],[1323734400000,35.86],[1323820800000,35.57],[1323907200000,35.8],[1323993600000,36.75],[1324252800000,36.47],[1324339200000,37.1],[1324425600000,37.04],[1324512000000,37.08],[1324598400000,37.42],[1324944000000,37.71],[1325030400000,36.83],[1325116800000,37.33],[1325203200000,37.19],[1325548800000,38.07],[1325635200000,38.2],[1325721600000,38.49],[1325808000000,38.59],[1326067200000,38.57],[1326153600000,39.01],[1326240000000,38.61],[1326326400000,38.84],[1326412800000,37.8],[1326758400000,38.3],[1326844800000,39.04],[1326931200000,39.4],[1327017600000,40.09],[1327276800000,39.8],[1327363200000,39.55],[1327449600000,39.72],[1327536000000,39],[1327622400000,38.98],[1327881600000,38.82],[1327968000000,38.97],[1328054400000,39.81],[1328140800000,39.34],[1328227200000,39.23],[1328486400000,38.98],[1328572800000,38.87],[1328659200000,39.35],[1328745600000,38.97],[1328832000000,38.6],[1329091200000,37.21],[1329177600000,37.55],[1329264000000,36.71],[1329350400000,36.96],[1329436800000,36.68],[1329782400000,36.19],[1329868800000,36.8],[1329955200000,37.44],[1330041600000,37.7],[1330300800000,37.7],[1330387200000,37.7],[1330473600000,37.37],[1330560000000,37.3],[1330646400000,36.59],[1330905600000,36.55],[1330992000000,36.28],[1331078400000,36.85],[1331164800000,37.45],[1331251200000,37.86],[1331510400000,37.74],[1331596800000,38.02],[1331683200000,38.24],[1331769600000,37.91],[1331856000000,38.32],[1332115200000,38.56],[1332201600000,38.81],[1332288000000,38.56],[1332374400000,38.29],[1332460800000,38.96],[1332720000000,39.6],[1332806400000,39.48],[1332892800000,39.08],[1332979200000,39.2],[1333065600000,39.66],[1333324800000,39.19],[1333411200000,38.68],[1333497600000,38.48],[1333584000000,38.22],[1333929600000,38.44],[1334016000000,38.39],[1334102400000,38.78],[1334188800000,38.81],[1334275200000,37.53],[1334534400000,37.48],[1334620800000,38.22],[1334707200000,37.45],[1334793600000,37.48],[1334880000000,37.75],[1335139200000,37.49],[1335225600000,37.5],[1335312000000,37.85],[1335398400000,36.97],[1335484800000,36.9],[1335744000000,37.21],[1335830400000,37.3],[1335916800000,37.21],[1336003200000,36.55],[1336089600000,36.17],[1336348800000,35.95],[1336435200000,36.16],[1336521600000,36.01],[1336608000000,36.58],[1336694400000,36.62],[1336953600000,36.65],[1337040000000,36.4],[1337126400000,36.7],[1337212800000,36.44],[1337299200000,35.99],[1337558400000,36.08],[1337644800000,36.25],[1337731200000,36.31],[1337817600000,36.46],[1337904000000,36.9],[1338249600000,36.51],[1338336000000,36.85],[1338422400000,36.99],[1338508800000,36.28],[1338768000000,36.41],[1338854400000,36.75],[1338940800000,37.29],[1339027200000,36.98],[1339113600000,37.06],[1339372800000,36.46],[1339459200000,37],[1339545600000,36.45],[1339632000000,36.96],[1339718400000,37.29],[1339977600000,37.81],[1340064000000,38.04],[1340150400000,37.96],[1340236800000,37.69],[1340323200000,37.93],[1340582400000,37.75],[1340668800000,37.71],[1340755200000,38.13],[1340841600000,38.74],[1340928000000,39.35],[1341187200000,39.85],[1341273600000,39.78],[1341446400000,39.46],[1341532800000,38.76],[1341792000000,38.9],[1341878400000,38.94],[1341964800000,39.29],[1342051200000,39.16],[1342137600000,39.64],[1342396800000,39.41],[1342483200000,39.79],[1342569600000,39.75],[1342656000000,39.73],[1342742400000,39.21],[1343001600000,38.65],[1343088000000,38.2],[1343174400000,37.95],[1343260800000,37.96],[1343347200000,38.66],[1343606400000,38.53],[1343692800000,39.7],[1343779200000,39.34],[1343865600000,38.87],[1343952000000,39.39],[1344211200000,39.22],[1344297600000,39.34],[1344384000000,38.7],[1344470400000,38.69],[1344556800000,38.69],[1344816000000,38.59],[1344902400000,38.29],[1344988800000,38.02],[1345075200000,37.58],[1345161600000,37.54],[1345420800000,37.71],[1345507200000,37.56],[1345593600000,37.92],[1345680000000,37.98],[1345766400000,38.1],[1346025600000,37.94],[1346112000000,37.5],[1346198400000,37.65],[1346284800000,38.1],[1346371200000,38.52],[1346716800000,38.78],[1346803200000,38.18],[1346889600000,38.64],[1346976000000,38.18],[1347235200000,38.03],[1347321600000,37.77],[1347408000000,37.9],[1347494400000,38.06],[1347580800000,37.36],[1347840000000,38.02],[1347926400000,38.31],[1348012800000,38.17],[1348099200000,38.33],[1348185600000,38.97],[1348444800000,39.36],[1348531200000,38.85],[1348617600000,38.65],[1348704000000,39.02],[1348790400000,38.71],[1349049600000,38.99],[1349136000000,39.03],[1349222400000,39.06],[1349308800000,39.36],[1349395200000,39.52],[1349654400000,39.78],[1349740800000,39.68],[1349827200000,39.39],[1349913600000,39.47],[1350000000000,39.5],[1350259200000,39.91],[1350345600000,40.75],[1350432000000,40.53],[1350518400000,40.68],[1350604800000,40.28],[1350864000000,40.43],[1350950400000,39.93],[1351036800000,39.66],[1351123200000,39.76],[1351209600000,39.34],[1351641600000,39.44],[1351728000000,40.92],[1351814400000,40.5],[1352073600000,40.26],[1352160000000,40.36],[1352246400000,40.76],[1352332800000,40.33],[1352419200000,40.47],[1352678400000,40.06],[1352764800000,40.71],[1352851200000,40.21],[1352937600000,40.16],[1353024000000,40.26],[1353283200000,40.69],[1353369600000,40.8],[1353456000000,40.85],[1353628800000,41.38],[1353888000000,41.45],[1353974400000,41.22],[1354060800000,41.2],[1354147200000,41.52],[1354233600000,42.22],[1354492800000,42.41],[1354579200000,42.75],[1354665600000,42.26],[1354752000000,42.56],[1354838400000,42.27],[1355097600000,42.23],[1355184000000,43.12],[1355270400000,42.71],[1355356800000,42.85],[1355443200000,43.36],[1355702400000,43.78],[1355788800000,43.91],[1355875200000,43.65],[1355961600000,43.8],[1356048000000,43.64],[1356307200000,43.46],[1356480000000,43.12],[1356566400000,43.23],[1356652800000,42.82],[1356912000000,43.18],[1357084800000,43.49],[1357171200000,43.4],[1357257600000,43.69],[1357516800000,43.83],[1357603200000,43.77],[1357689600000,43.77],[1357776000000,43.89],[1357862400000,43.84],[1358121600000,44.29],[1358208000000,45.07],[1358294400000,45.02],[1358380800000,45.52],[1358467200000,45.85],[1358812800000,45.62],[1358899200000,46.18],[1358985600000,45.72],[1359072000000,45.03],[1359331200000,45.11],[1359417600000,45.54],[1359504000000,45.58],[1359590400000,45.37],[1359676800000,46.53],[1359936000000,46.04],[1360022400000,46.28],[1360108800000,46.47],[1360195200000,46.4],[1360281600000,46.89],[1360540800000,46.76],[1360627200000,46.96],[1360713600000,46.64],[1360800000000,46.77],[1360886400000,46.6],[1361232000000,47.22],[1361318400000,46.61],[1361404800000,46.48],[1361491200000,46.95],[1361750400000,46.18],[1361836800000,46.57],[1361923200000,47.03],[1362009600000,47.2],[1362096000000,47.98],[1362355200000,48.25],[1362441600000,48.27],[1362528000000,48.48],[1362614400000,48.08],[1362700800000,48.48],[1362960000000,48.55],[1363046400000,48.65],[1363132800000,48.86],[1363219200000,49.29],[1363305600000,48.89],[1363564800000,48.3],[1363651200000,50.06],[1363737600000,50.24],[1363824000000,49.79],[1363910400000,49.82],[1364169600000,50.59],[1364256000000,50.72],[1364342400000,50.71],[1364428800000,51.45],[1364774400000,51.64],[1364860800000,52.41],[1364947200000,51.69],[1365033600000,51.82],[1365120000000,52.08],[1365379200000,52.63],[1365465600000,52.92],[1365552000000,53.3],[1365638400000,53.81],[1365724800000,54.18],[1365984000000,54.04],[1366070400000,54.95],[1366156800000,55.06],[1366243200000,55.44],[1366329600000,55.92],[1366588800000,56.2],[1366675200000,56.3],[1366761600000,55.82],[1366848000000,53.41],[1366934400000,53.26],[1367193600000,54.06],[1367280000000,54.12],[1367366400000,53.84],[1367452800000,54.85],[1367539200000,54.57],[1367798400000,54.4],[1367884800000,54.98],[1367971200000,55.1],[1368057600000,54.81],[1368144000000,54.84],[1368403200000,54.48],[1368489600000,54.96],[1368576000000,55.01],[1368662400000,54.4],[1368748800000,54.99],[1369008000000,54.82],[1369094400000,54.65],[1369180800000,54.46],[1369267200000,54.58],[1369353600000,54.44],[1369699200000,54.37],[1369785600000,53.9],[1369872000000,54.72],[1369958400000,54.08],[1370217600000,52.68],[1370304000000,53.26],[1370390400000,52.9],[1370476800000,52.55],[1370563200000,52.94],[1370822400000,53.71],[1370908800000,54.81],[1370995200000,54.75],[1371081600000,54.56],[1371168000000,54.93],[1371427200000,55.66],[1371513600000,55.86],[1371600000000,55.56],[1371686400000,54.14],[1371772800000,54.34],[1372032000000,53.61],[1372118400000,53.55],[1372204800000,55.04],[1372291200000,55.31],[1372377600000,55.83],[1372636800000,55.01],[1372723200000,54.83],[1372809600000,55.09],[1372982400000,55.56],[1373241600000,56.28],[1373328000000,55.91],[1373414400000,56.55],[1373500800000,58.1],[1373587200000,58.39],[1373846400000,58.24],[1373932800000,58.28],[1374019200000,58.47],[1374105600000,58.31],[1374192000000,58.81],[1374451200000,58.99],[1374537600000,57.63],[1374624000000,56.77],[1374710400000,57.61],[1374796800000,58.47],[1375056000000,58.39],[1375142400000,58.23],[1375228800000,58.27],[1375315200000,58.8],[1375401600000,58.48],[1375660800000,59.03],[1375747200000,58.66],[1375833600000,58.74],[1375920000000,59.61],[1376006400000,59.49],[1376265600000,58.67],[1376352000000,58.14],[1376438400000,58.03],[1376524800000,57.27],[1376611200000,56.53],[1376870400000,56.85],[1376956800000,57.45],[1377043200000,57.07],[1377129600000,57.43],[1377216000000,57.45],[1377475200000,57.44],[1377561600000,56.87],[1377648000000,56.96],[1377734400000,57.15],[1377820800000,56.92],[1378166400000,57.39],[1378252800000,58.13],[1378339200000,58.15],[1378425600000,58.24],[1378684800000,58.66],[1378771200000,59.37],[1378857600000,60.49],[1378944000000,60.46],[1379030400000,60.28],[1379289600000,60.95],[1379376000000,61.59],[1379462400000,61.49],[1379548800000,62.23],[1379635200000,61.65],[1379894400000,61.57],[1379980800000,60.91],[1380067200000,61.01],[1380153600000,61.16],[1380240000000,61.28],[1380499200000,61.1],[1380585600000,62.48],[1380672000000,62.2],[1380758400000,61.42],[1380844800000,62.47],[1381104000000,61.97],[1381190400000,61.19],[1381276800000,61.27],[1381363200000,62.43],[1381449600000,62.65],[1381708800000,63.11],[1381795200000,62.81],[1381881600000,63.75],[1381968000000,64.62],[1382054400000,64.61],[1382313600000,63.87],[1382400000000,63.76],[1382486400000,63.83],[1382572800000,64.64],[1382659200000,65.24],[1382918400000,65.2],[1383004800000,65.8],[1383091200000,65.22],[1383177600000,65.33],[1383264000000,66.38],[1383523200000,67.09],[1383609600000,66.87],[1383696000000,67.16],[1383782400000,66.73],[1383868800000,68],[1384128000000,68.11],[1384214400000,68.29],[1384300800000,68.49],[1384387200000,69.22],[1384473600000,69.5],[1384732800000,69.15],[1384819200000,68.87],[1384905600000,69.34],[1384992000000,69.79],[1385078400000,70.02],[1385337600000,70.42],[1385424000000,70.61],[1385510400000,70.5],[1385683200000,70.53],[1385942400000,70.89],[1386028800000,70.57],[1386115200000,69.46],[1386201600000,69.14],[1386288000000,70.29],[1386547200000,70.63],[1386633600000,69.77],[1386720000000,68.8],[1386806400000,68.77],[1386892800000,68.45],[1387152000000,68.45],[1387238400000,68.35],[1387324800000,69.61],[1387411200000,69.63],[1387497600000,69.82],[1387756800000,70.03],[1387843200000,70.14],[1388016000000,70.3],[1388102400000,70.21],[1388361600000,70.38],[1388448000000,70.31],[1388620800000,69.89],[1388707200000,69.94],[1388966400000,69.69],[1389052800000,70.45],[1389139200000,71.14],[1389225600000,71.38],[1389312000000,71.34],[1389571200000,70.61],[1389657600000,70.54],[1389744000000,70.55],[1389830400000,70.5],[1389916800000,70.53],[1390262400000,70.52],[1390348800000,70.28],[1390435200000,69.64],[1390521600000,67.25],[1390780800000,66.81],[1390867200000,67.72],[1390953600000,67.26],[1391040000000,67.77],[1391126400000,67.22],[1391385600000,65.17],[1391472000000,65.01],[1391558400000,64.72],[1391644800000,65.51],[1391731200000,66.54],[1391990400000,66.37],[1392076800000,67.56],[1392163200000,67.74],[1392249600000,67.89],[1392336000000,68],[1392681600000,68.5],[1392768000000,68.11],[1392854400000,68.39],[1392940800000,68.4],[1393200000000,68.58],[1393286400000,68.72],[1393372800000,68.26],[1393459200000,68.01],[1393545600000,67.85],[1393804800000,67.5],[1393891200000,68.76],[1393977600000,68.89],[1394064000000,68.75],[1394150400000,68.94],[1394409600000,69.1],[1394496000000,68.34],[1394582400000,67.68],[1394668800000,67.79],[1394755200000,67.57],[1395014400000,68.08],[1395100800000,67.85],[1395187200000,66.87],[1395273600000,66.48],[1395360000000,64.82],[1395619200000,64.32],[1395705600000,64.56],[1395792000000,64.85],[1395878400000,64.11],[1395964800000,64.82],[1396224000000,65.59],[1396310400000,65.91],[1396396800000,65.58],[1396483200000,65.8],[1396569600000,65.05],[1396828800000,64.18],[1396915200000,64.17],[1397001600000,65.64],[1397088000000,65],[1397174400000,64.17],[1397433600000,64.51],[1397520000000,64.22],[1397606400000,64.95],[1397692800000,64.68],[1398038400000,64.8],[1398124800000,64.68],[1398211200000,64.84],[1398297600000,64.89],[1398384000000,62.83],[1398643200000,63.45],[1398729600000,63.99],[1398816000000,65.18],[1398902400000,64.87],[1398988800000,64.27],[1399248000000,65.1],[1399334400000,64.77],[1399420800000,64.54],[1399507200000,64.4],[1399593600000,65.58],[1399852800000,66.67],[1399939200000,66.85],[1400025600000,67.3],[1400112000000,67.5],[1400198400000,68.31],[1400457600000,69.42],[1400544000000,69.79],[1400630400000,70.71],[1400716800000,71.35],[1400803200000,71.64],[1401148800000,72.4],[1401235200000,72.68],[1401321600000,73.28],[1401408000000,73.18],[1401667200000,73.21],[1401753600000,73.09],[1401840000000,73.66],[1401926400000,72.79],[1402012800000,72.5],[1402272000000,72.34],[1402358400000,72.01],[1402444800000,71.92],[1402531200000,71.46],[1402617600000,71.78],[1402876800000,71.52],[1402963200000,71.74],[1403049600000,72.1],[1403136000000,71.93],[1403222400000,72.26],[1403481600000,72.48],[1403568000000,72.55],[1403654400000,72.74],[1403740800000,72.72],[1403827200000,72.87],[1404086400000,72.66],[1404172800000,72.98]];
    var data2 = [[1294012800000,34.32],[1294099200000,33.94],[1294185600000,34.46],[1294272000000,34.86],[1294358400000,34.93],[1294617600000,34.73],[1294704000000,35.07],[1294790400000,34.86],[1294876800000,35.38],[1294963200000,35.43],[1295308800000,36.17],[1295395200000,35.55],[1295481600000,35.72],[1295568000000,36.1],[1295827200000,36.29],[1295913600000,35.95],[1296000000000,36.39],[1296086400000,36.82],[1296172800000,36],[1296432000000,35.86],[1296518400000,36.29],[1296604800000,35.52],[1296691200000,35.39],[1296777600000,36.56],[1297036800000,36.48],[1297123200000,36.56],[1297209600000,36.67],[1297296000000,36.71],[1297382400000,36.66],[1297641600000,36.87],[1297728000000,36.6],[1297814400000,36.37],[1297900800000,37.43],[1297987200000,37.79],[1298332800000,37.4],[1298419200000,36.84],[1298505600000,36.73],[1298592000000,37.39],[1298851200000,37.91],[1298937600000,37.31],[1299024000000,37.16],[1299110400000,37.61],[1299196800000,37.67],[1299456000000,37.3],[1299542400000,37.55],[1299628800000,38.45],[1299715200000,37.54],[1299801600000,37.02],[1300060800000,36.62],[1300147200000,36.44],[1300233600000,36.6],[1300320000000,36.62],[1300406400000,37.3],[1300665600000,37.85],[1300752000000,38.3],[1300838400000,38.15],[1300924800000,39.06],[1301011200000,39.29],[1301270400000,39.38],[1301356800000,39.73],[1301443200000,39.46],[1301529600000,39.56],[1301616000000,40.35],[1301875200000,40.57],[1301961600000,40.58],[1302048000000,40.57],[1302134400000,40.58],[1302220800000,40.2],[1302480000000,40.14],[1302566400000,39.6],[1302652800000,39.65],[1302739200000,39.64],[1302825600000,39.59],[1303084800000,39.5],[1303171200000,39.77],[1303257600000,40.49],[1303344000000,40.55],[1303689600000,40.96],[1303776000000,41.08],[1303862400000,42.03],[1303948800000,41],[1304035200000,40.64],[1304294400000,41.17],[1304380800000,41.15],[1304467200000,40.76],[1304553600000,41.03],[1304640000000,41.47],[1304899200000,42.22],[1304985600000,42.31],[1305072000000,42.21],[1305158400000,42.44],[1305244800000,42.04],[1305504000000,42.27],[1305590400000,42.04],[1305676800000,41.84],[1305763200000,41.83],[1305849600000,41.59],[1306108800000,41.35],[1306195200000,40.91],[1306281600000,41.52],[1306368000000,41.43],[1306454400000,41.06],[1306800000000,41.22],[1306886400000,40.71],[1306972800000,40.75],[1307059200000,40.35],[1307318400000,40.45],[1307404800000,40.91],[1307491200000,40.97],[1307577600000,41.54],[1307664000000,41.12],[1307923200000,40.8],[1308009600000,41.24],[1308096000000,41.04],[1308182400000,41.06],[1308268800000,41],[1308528000000,41.39],[1308614400000,41.58],[1308700800000,41.23],[1308787200000,41.31],[1308873600000,40.14],[1309132800000,40.65],[1309219200000,41.4],[1309305600000,41.09],[1309392000000,41.4],[1309478400000,42.12],[1309824000000,42.28],[1309910400000,43.09],[1309996800000,43.05],[1310083200000,42.65],[1310342400000,42.31],[1310428800000,42.28],[1310515200000,42.32],[1310601600000,42.22],[1310688000000,41.99],[1310947200000,41.2],[1311033600000,41.85],[1311120000000,41.75],[1311206400000,39.26],[1311292800000,40.52],[1311552000000,40.35],[1311638400000,39.93],[1311724800000,39.01],[1311811200000,38.72],[1311897600000,38.31],[1312156800000,37.73],[1312243200000,37.73],[1312329600000,38.16],[1312416000000,36.26],[1312502400000,36.81],[1312761600000,34.63],[1312848000000,36.63],[1312934400000,35.24],[1313020800000,37.44],[1313107200000,38.3],[1313366400000,38.89],[1313452800000,38.5],[1313539200000,38.69],[1313625600000,37.69],[1313712000000,37.54],[1313971200000,37.39],[1314057600000,38.26],[1314144000000,38.19],[1314230400000,37.58],[1314316800000,38.48],[1314576000000,39.23],[1314662400000,39.27],[1314748800000,39.58],[1314835200000,39.48],[1314921600000,38.81],[1315267200000,39.07],[1315353600000,39.97],[1315440000000,39.74],[1315526400000,38.4],[1315785600000,38.08],[1315872000000,38.52],[1315958400000,39.17],[1316044800000,38.58],[1316131200000,39.31],[1316390400000,39.41],[1316476800000,39.69],[1316563200000,38.37],[1316649600000,38],[1316736000000,37.76],[1316995200000,38.91],[1317081600000,39.16],[1317168000000,38.6],[1317254400000,37.72],[1317340800000,37.27],[1317600000000,35.74],[1317686400000,35.92],[1317772800000,36.38],[1317859200000,36.1],[1317945600000,35.78],[1318204800000,37.08],[1318291200000,37.01],[1318377600000,37.62],[1318464000000,37.94],[1318550400000,38.18],[1318809600000,37.89],[1318896000000,38.36],[1318982400000,38.19],[1319068800000,38.75],[1319155200000,39.71],[1319414400000,40.65],[1319500800000,39.6],[1319587200000,40.9],[1319673600000,41.98],[1319760000000,42.08],[1320019200000,40.8],[1320105600000,40.04],[1320192000000,39.87],[1320278400000,39.92],[1320364800000,39.22],[1320624000000,39.72],[1320710400000,39.58],[1320796800000,38.23],[1320883200000,38.73],[1320969600000,39.67],[1321228800000,39.19],[1321315200000,39.35],[1321401600000,38.08],[1321488000000,37.52],[1321574400000,37.28],[1321833600000,36.72],[1321920000000,36.63],[1322006400000,36.37],[1322179200000,35.98],[1322438400000,36.44],[1322524800000,36.38],[1322611200000,37.15],[1322697600000,37.24],[1322784000000,37.01],[1323043200000,36.61],[1323129600000,36.44],[1323216000000,36.59],[1323302400000,36.28],[1323388800000,36.37],[1323648000000,35.84],[1323734400000,35.86],[1323820800000,35.57],[1323907200000,35.8],[1323993600000,36.75],[1324252800000,36.47],[1324339200000,37.1],[1324425600000,37.04],[1324512000000,37.08],[1324598400000,37.42],[1324944000000,37.71],[1325030400000,36.83],[1325116800000,37.33],[1325203200000,37.19],[1325548800000,38.07],[1325635200000,38.2],[1325721600000,38.49],[1325808000000,38.59],[1326067200000,38.57],[1326153600000,39.01],[1326240000000,38.61],[1326326400000,38.84],[1326412800000,37.8],[1326758400000,38.3],[1326844800000,39.04],[1326931200000,39.4],[1327017600000,40.09],[1327276800000,39.8],[1327363200000,39.55],[1327449600000,39.72],[1327536000000,39],[1327622400000,38.98],[1327881600000,38.82],[1327968000000,38.97],[1328054400000,39.81],[1328140800000,39.34],[1328227200000,39.23],[1328486400000,38.98],[1328572800000,38.87],[1328659200000,39.35],[1328745600000,38.97],[1328832000000,38.6],[1329091200000,37.21],[1329177600000,37.55],[1329264000000,36.71],[1329350400000,36.96],[1329436800000,36.68],[1329782400000,36.19],[1329868800000,36.8],[1329955200000,37.44],[1330041600000,37.7],[1330300800000,37.7],[1330387200000,37.7],[1330473600000,37.37],[1330560000000,37.3],[1330646400000,36.59],[1330905600000,36.55],[1330992000000,36.28],[1331078400000,36.85],[1331164800000,37.45],[1331251200000,37.86],[1331510400000,37.74],[1331596800000,38.02],[1331683200000,38.24],[1331769600000,37.91],[1331856000000,38.32],[1332115200000,38.56],[1332201600000,38.81],[1332288000000,38.56],[1332374400000,38.29],[1332460800000,38.96],[1332720000000,39.6],[1332806400000,39.48],[1332892800000,39.08],[1332979200000,39.2],[1333065600000,39.66],[1333324800000,39.19],[1333411200000,38.68],[1333497600000,38.48],[1333584000000,38.22],[1333929600000,38.44],[1334016000000,38.39],[1334102400000,38.78],[1334188800000,38.81],[1334275200000,37.53],[1334534400000,37.48],[1334620800000,38.22],[1334707200000,37.45],[1334793600000,37.48],[1334880000000,37.75],[1335139200000,37.49],[1335225600000,37.5],[1335312000000,37.85],[1335398400000,36.97],[1335484800000,36.9],[1335744000000,37.21],[1335830400000,37.3],[1335916800000,37.21],[1336003200000,36.55],[1336089600000,36.17],[1336348800000,35.95],[1336435200000,36.16],[1336521600000,36.01],[1336608000000,36.58],[1336694400000,36.62],[1336953600000,36.65],[1337040000000,36.4],[1337126400000,36.7],[1337212800000,36.44],[1337299200000,35.99],[1337558400000,36.08],[1337644800000,36.25],[1337731200000,36.31],[1337817600000,36.46],[1337904000000,36.9],[1338249600000,36.51],[1338336000000,36.85],[1338422400000,36.99],[1338508800000,36.28],[1338768000000,36.41],[1338854400000,36.75],[1338940800000,37.29],[1339027200000,36.98],[1339113600000,37.06],[1339372800000,36.46],[1339459200000,37],[1339545600000,36.45],[1339632000000,36.96],[1339718400000,37.29],[1339977600000,37.81],[1340064000000,38.04],[1340150400000,37.96],[1340236800000,37.69],[1340323200000,37.93],[1340582400000,37.75],[1340668800000,37.71],[1340755200000,38.13],[1340841600000,38.74],[1340928000000,39.35],[1341187200000,39.85],[1341273600000,39.78],[1341446400000,39.46],[1341532800000,38.76],[1341792000000,38.9],[1341878400000,38.94],[1341964800000,39.29],[1342051200000,39.16],[1342137600000,39.64],[1342396800000,39.41],[1342483200000,39.79],[1342569600000,39.75],[1342656000000,39.73],[1342742400000,39.21],[1343001600000,38.65],[1343088000000,38.2],[1343174400000,37.95],[1343260800000,37.96],[1343347200000,38.66],[1343606400000,38.53],[1343692800000,39.7],[1343779200000,39.34],[1343865600000,38.87],[1343952000000,39.39],[1344211200000,39.22],[1344297600000,39.34],[1344384000000,38.7],[1344470400000,38.69],[1344556800000,38.69],[1344816000000,38.59],[1344902400000,38.29],[1344988800000,38.02],[1345075200000,37.58],[1345161600000,37.54],[1345420800000,37.71],[1345507200000,37.56],[1345593600000,37.92],[1345680000000,37.98],[1345766400000,38.1],[1346025600000,37.94],[1346112000000,37.5],[1346198400000,37.65],[1346284800000,38.1],[1346371200000,38.52],[1346716800000,38.78],[1346803200000,38.18],[1346889600000,38.64],[1346976000000,38.18],[1347235200000,38.03],[1347321600000,37.77],[1347408000000,37.9],[1347494400000,38.06],[1347580800000,37.36],[1347840000000,38.02],[1347926400000,38.31],[1348012800000,38.17],[1348099200000,38.33],[1348185600000,38.97],[1348444800000,39.36],[1348531200000,38.85],[1348617600000,38.65],[1348704000000,39.02],[1348790400000,38.71],[1349049600000,38.99],[1349136000000,39.03],[1349222400000,39.06],[1349308800000,39.36],[1349395200000,39.52],[1349654400000,39.78],[1349740800000,39.68],[1349827200000,39.39],[1349913600000,39.47],[1350000000000,39.5],[1350259200000,39.91],[1350345600000,40.75],[1350432000000,40.53],[1350518400000,40.68],[1350604800000,40.28],[1350864000000,40.43],[1350950400000,39.93],[1351036800000,39.66],[1351123200000,39.76],[1351209600000,39.34],[1351641600000,39.44],[1351728000000,40.92],[1351814400000,40.5],[1352073600000,40.26],[1352160000000,40.36],[1352246400000,40.76],[1352332800000,40.33],[1352419200000,40.47],[1352678400000,40.06],[1352764800000,40.71],[1352851200000,40.21],[1352937600000,40.16],[1353024000000,40.26],[1353283200000,40.69],[1353369600000,40.8],[1353456000000,40.85],[1353628800000,41.38],[1353888000000,41.45],[1353974400000,41.22],[1354060800000,41.2],[1354147200000,41.52],[1354233600000,42.22],[1354492800000,42.41],[1354579200000,42.75],[1354665600000,42.26],[1354752000000,42.56],[1354838400000,42.27],[1355097600000,42.23],[1355184000000,43.12],[1355270400000,42.71],[1355356800000,42.85],[1355443200000,43.36],[1355702400000,43.78],[1355788800000,43.91],[1355875200000,43.65],[1355961600000,43.8],[1356048000000,43.64],[1356307200000,43.46],[1356480000000,43.12],[1356566400000,43.23],[1356652800000,42.82],[1356912000000,43.18],[1357084800000,43.49],[1357171200000,43.4],[1357257600000,43.69],[1357516800000,43.83],[1357603200000,43.77],[1357689600000,43.77],[1357776000000,43.89],[1357862400000,43.84],[1358121600000,44.29],[1358208000000,45.07],[1358294400000,45.02],[1358380800000,45.52],[1358467200000,45.85],[1358812800000,45.62],[1358899200000,46.18],[1358985600000,45.72],[1359072000000,45.03],[1359331200000,45.11],[1359417600000,45.54],[1359504000000,45.58],[1359590400000,45.37],[1359676800000,46.53],[1359936000000,46.04],[1360022400000,46.28],[1360108800000,46.47],[1360195200000,46.4],[1360281600000,46.89],[1360540800000,46.76],[1360627200000,46.96],[1360713600000,46.64],[1360800000000,46.77],[1360886400000,46.6],[1361232000000,47.22],[1361318400000,46.61],[1361404800000,46.48],[1361491200000,46.95],[1361750400000,46.18],[1361836800000,46.57],[1361923200000,47.03],[1362009600000,47.2],[1362096000000,47.98],[1362355200000,48.25],[1362441600000,48.27],[1362528000000,48.48],[1362614400000,48.08],[1362700800000,48.48],[1362960000000,48.55],[1363046400000,48.65],[1363132800000,48.86],[1363219200000,49.29],[1363305600000,48.89],[1363564800000,48.3],[1363651200000,50.06],[1363737600000,50.24],[1363824000000,49.79],[1363910400000,49.82],[1364169600000,50.59],[1364256000000,50.72],[1364342400000,50.71],[1364428800000,51.45],[1364774400000,51.64],[1364860800000,52.41],[1364947200000,51.69],[1365033600000,51.82],[1365120000000,52.08],[1365379200000,52.63],[1365465600000,52.92],[1365552000000,53.3],[1365638400000,53.81],[1365724800000,54.18],[1365984000000,54.04],[1366070400000,54.95],[1366156800000,55.06],[1366243200000,55.44],[1366329600000,55.92],[1366588800000,56.2],[1366675200000,56.3],[1366761600000,55.82],[1366848000000,53.41],[1366934400000,53.26],[1367193600000,54.06],[1367280000000,54.12],[1367366400000,53.84],[1367452800000,54.85],[1367539200000,54.57],[1367798400000,54.4],[1367884800000,54.98],[1367971200000,55.1],[1368057600000,54.81],[1368144000000,54.84],[1368403200000,54.48],[1368489600000,54.96],[1368576000000,55.01],[1368662400000,54.4],[1368748800000,54.99],[1369008000000,54.82],[1369094400000,54.65],[1369180800000,54.46],[1369267200000,54.58],[1369353600000,54.44],[1369699200000,54.37],[1369785600000,53.9],[1369872000000,54.72],[1369958400000,54.08],[1370217600000,52.68],[1370304000000,53.26],[1370390400000,52.9],[1370476800000,52.55],[1370563200000,52.94],[1370822400000,53.71],[1370908800000,54.81],[1370995200000,54.75],[1371081600000,54.56],[1371168000000,54.93],[1371427200000,55.66],[1371513600000,55.86],[1371600000000,55.56],[1371686400000,54.14],[1371772800000,54.34],[1372032000000,53.61],[1372118400000,53.55],[1372204800000,55.04],[1372291200000,55.31],[1372377600000,55.83],[1372636800000,55.01]];
    var data3 = [[1309824000000,19.27],[1309910400000,19.11],[1309996800000,19.99],[1310083200000,20.02],[1310342400000,20.04],[1310428800000,19.88],[1310515200000,19.23],[1310601600000,18.47],[1310688000000,18.48],[1310947200000,17.95],[1311033600000,18.03],[1311120000000,18.04],[1311206400000,18.56],[1311292800000,18.62],[1311552000000,18.64],[1311638400000,18.57],[1311724800000,17.82],[1311811200000,17.69],[1311897600000,17],[1312156800000,16.72],[1312243200000,16.29],[1312329600000,16.57],[1312416000000,15.21],[1312502400000,15.73],[1312761600000,14.16],[1312848000000,14.37],[1312934400000,13.63],[1313020800000,14.76],[1313107200000,14.37],[1313366400000,14.51],[1313452800000,14.26],[1313539200000,14.38],[1313625600000,14.45],[1313712000000,14.5],[1313971200000,14.59],[1314057600000,14.97],[1314144000000,15.27],[1314230400000,15.17],[1314316800000,15.68],[1314576000000,16.94],[1314662400000,17],[1314748800000,16.95],[1314835200000,16.93],[1314921600000,16.75],[1315267200000,16.52],[1315353600000,16.83],[1315440000000,16.9],[1315526400000,16.43],[1315785600000,16.48],[1315872000000,16.61],[1315958400000,16.37],[1316044800000,16.03],[1316131200000,15.75],[1316390400000,15.42],[1316476800000,15.57],[1316563200000,14.76],[1316649600000,13.89],[1316736000000,14.05],[1316995200000,14.26],[1317081600000,14.81],[1317168000000,14.03],[1317254400000,14.48],[1317340800000,13.65],[1317600000000,13.14],[1317686400000,13.58],[1317772800000,13.98],[1317859200000,13.96],[1317945600000,13.35],[1318204800000,13.92],[1318291200000,13.9],[1318377600000,14.32],[1318464000000,14.05],[1318550400000,14.3],[1318809600000,14.12],[1318896000000,14.62],[1318982400000,14.44],[1319068800000,14.24],[1319155200000,14.34],[1319414400000,14.51],[1319500800000,14.25],[1319587200000,14.1],[1319673600000,14.59],[1319760000000,14.39],[1320019200000,14.17],[1320105600000,13.58],[1320192000000,13.69],[1320278400000,13.57],[1320364800000,13.46],[1320624000000,13.43],[1320710400000,13.48],[1320796800000,12.93],[1320883200000,13.19],[1320969600000,13.25],[1321228800000,13.19],[1321315200000,13.37],[1321401600000,13.15],[1321488000000,13.22],[1321574400000,13.36],[1321833600000,13.13],[1321920000000,12.92],[1322006400000,12.64],[1322179200000,12.75],[1322438400000,13.07],[1322524800000,12.96],[1322611200000,13.41],[1322697600000,13.26],[1322784000000,13.19],[1323043200000,13.42],[1323129600000,13.47],[1323216000000,13.38],[1323302400000,13.23],[1323388800000,13.38],[1323648000000,13.55],[1323734400000,13.24],[1323820800000,12.85],[1323907200000,13],[1323993600000,13.02],[1324252800000,13.01],[1324339200000,13.54],[1324425600000,13.08],[1324512000000,13.38],[1324598400000,13.54],[1324944000000,13.23],[1325030400000,13.11],[1325116800000,13.2],[1325203200000,13.08],[1325548800000,13.45],[1325635200000,14.1],[1325721600000,14.8],[1325808000000,14.88],[1326067200000,14.81],[1326153600000,15.02],[1326240000000,14.71],[1326326400000,14.53],[1326412800000,14.5],[1326758400000,14.63],[1326844800000,14.6],[1326931200000,15.4],[1327017600000,15.35],[1327276800000,15.43],[1327363200000,15.15],[1327449600000,14.81],[1327536000000,15.03],[1327622400000,15.03],[1327881600000,14.92],[1327968000000,15.22],[1328054400000,15.49],[1328140800000,16.01],[1328227200000,16.52],[1328486400000,16.37],[1328572800000,16.35],[1328659200000,16.29],[1328745600000,16.51],[1328832000000,14.35],[1329091200000,14.08],[1329177600000,13.76],[1329264000000,13.66],[1329350400000,13.82],[1329436800000,13.61],[1329782400000,13.32],[1329868800000,13.26],[1329955200000,14.22],[1330041600000,14],[1330300800000,14],[1330387200000,13.99],[1330473600000,14],[1330560000000,14.3],[1330646400000,14.23],[1330905600000,14.65],[1330992000000,14.35],[1331078400000,14.88],[1331164800000,15.31],[1331251200000,15.5],[1331510400000,15.4],[1331596800000,15.63],[1331683200000,15.1],[1331769600000,15.03],[1331856000000,15],[1332115200000,15.05],[1332201600000,15.11],[1332288000000,15.23],[1332374400000,14.78],[1332460800000,15.42],[1332720000000,15.8],[1332806400000,15.65],[1332892800000,15.58],[1332979200000,15.28],[1333065600000,15.61],[1333324800000,15.61],[1333411200000,15.57],[1333497600000,15.33],[1333584000000,15.03],[1333929600000,14.74],[1334016000000,14.29],[1334102400000,14.39],[1334188800000,14.54],[1334275200000,14.79],[1334534400000,14.75],[1334620800000,14.68],[1334707200000,14.31],[1334793600000,14.1],[1334880000000,14.26],[1335139200000,14.07],[1335225600000,14.29],[1335312000000,14.33],[1335398400000,14.32],[1335484800000,14.13],[1335744000000,14.09],[1335830400000,14.03],[1335916800000,13.96],[1336003200000,14.01],[1336089600000,14.08],[1336348800000,14.32],[1336435200000,14.27],[1336521600000,14.23],[1336608000000,14.82],[1336694400000,14.76],[1336953600000,14.82],[1337040000000,14.58],[1337126400000,14.43],[1337212800000,14.15],[1337299200000,13.78],[1337558400000,13.78],[1337644800000,13.49],[1337731200000,13.33],[1337817600000,13.57],[1337904000000,13.38],[1338249600000,13.5],[1338336000000,13.12],[1338422400000,12.9],[1338508800000,12.43],[1338768000000,12.41],[1338854400000,12.38],[1338940800000,12.28],[1339027200000,12.1],[1339113600000,12],[1339372800000,11.91],[1339459200000,11.84],[1339545600000,11.86],[1339632000000,11.81],[1339718400000,11.82],[1339977600000,11.83],[1340064000000,12.03],[1340150400000,12.05],[1340236800000,12.17],[1340323200000,12.13],[1340582400000,12.24],[1340668800000,12.03],[1340755200000,12.42],[1340841600000,12.43],[1340928000000,12.69],[1341187200000,12.8],[1341273600000,12.78],[1341446400000,12.83],[1341532800000,12.79],[1341792000000,12.79],[1341878400000,12.7],[1341964800000,12.56],[1342051200000,12.25],[1342137600000,12.42],[1342396800000,12.35],[1342483200000,12.56],[1342569600000,12.55],[1342656000000,12.62],[1342742400000,11.98],[1343001600000,11.95],[1343088000000,11.9],[1343174400000,11.86],[1343260800000,12.01],[1343347200000,12.27],[1343606400000,12.13],[1343692800000,12.12],[1343779200000,12.12],[1343865600000,12.45],[1343952000000,12.3],[1344211200000,12.61],[1344297600000,12.59],[1344384000000,12.29],[1344470400000,12.22],[1344556800000,13],[1344816000000,12.93],[1344902400000,12.74],[1344988800000,12.8],[1345075200000,12.87],[1345161600000,12.86],[1345420800000,12.89],[1345507200000,12.94],[1345593600000,12.81],[1345680000000,13.31],[1345766400000,13.59],[1346025600000,13.76],[1346112000000,14.19],[1346198400000,14.37],[1346284800000,14.66],[1346371200000,14.32],[1346716800000,14.24],[1346803200000,14.26],[1346889600000,14.39],[1346976000000,14.34],[1347235200000,14.35],[1347321600000,14.68],[1347408000000,14.75],[1347494400000,14.9],[1347580800000,15.56],[1347840000000,15.32],[1347926400000,15.55],[1348012800000,15.56],[1348099200000,15.15],[1348185600000,15.49],[1348444800000,15.9],[1348531200000,15.73],[1348617600000,15.53],[1348704000000,15.62],[1348790400000,15.41],[1349049600000,15.44],[1349136000000,15.41],[1349222400000,15.57],[1349308800000,15.28],[1349395200000,15.57],[1349654400000,15.56],[1349740800000,15.62],[1349827200000,15.6],[1349913600000,15.91],[1350000000000,15.97],[1350259200000,15.98],[1350345600000,16.34],[1350432000000,16.54],[1350518400000,16.6],[1350604800000,16.35],[1350864000000,16.04],[1350950400000,15.72],[1351036800000,15.57],[1351123200000,16.69],[1351209600000,16.77],[1351641600000,16.82],[1351728000000,16.45],[1351814400000,16.55],[1352073600000,16.56],[1352160000000,16.66],[1352246400000,16.26],[1352332800000,16.03],[1352419200000,16.06],[1352678400000,16.43],[1352764800000,16.6],[1352851200000,16.5],[1352937600000,15.86],[1353024000000,15.97],[1353283200000,16.63],[1353369600000,17.08],[1353456000000,17.99],[1353628800000,18.24],[1353888000000,18.14],[1353974400000,18.08],[1354060800000,17.96],[1354147200000,17.94],[1354233600000,17.58],[1354492800000,17.91],[1354579200000,17.76],[1354665600000,17.25],[1354752000000,17],[1354838400000,16.84],[1355097600000,16.78],[1355184000000,16.77],[1355270400000,16.97],[1355356800000,17],[1355443200000,16.8],[1355702400000,16.6],[1355788800000,17.14],[1355875200000,16.86],[1355961600000,16.98],[1356048000000,16.73],[1356307200000,17.02],[1356480000000,16.89],[1356566400000,16.95],[1356652800000,17.48],[1356912000000,17.43],[1357084800000,17.99],[1357171200000,17.99],[1357257600000,18.68],[1357516800000,19.2],[1357603200000,19.12],[1357689600000,19.36],[1357776000000,19.56],[1357862400000,19.98],[1358121600000,19.99],[1358208000000,19.9],[1358294400000,19.92],[1358380800000,20.01],[1358467200000,20.04],[1358812800000,20.53],[1358899200000,20.51],[1358985600000,20.5],[1359072000000,20.63],[1359331200000,20.33],[1359417600000,20.47],[1359504000000,20.5],[1359590400000,20.36],[1359676800000,20.39],[1359936000000,20.13],[1360022400000,20.24],[1360108800000,20.36],[1360195200000,20.5],[1360281600000,20.54],[1360540800000,21.44],[1360627200000,20.92],[1360713600000,20.49],[1360800000000,20.97],[1360886400000,21.4],[1361232000000,22.8],[1361318400000,21.98],[1361404800000,22.15],[1361491200000,22.38],[1361750400000,22.13],[1361836800000,22.01],[1361923200000,22.08],[1362009600000,23.03],[1362096000000,22.85],[1362355200000,22.67],[1362441600000,22.98],[1362528000000,22.96],[1362614400000,22.6],[1362700800000,22.35],[1362960000000,22.44],[1363046400000,21.76],[1363132800000,22.41],[1363219200000,21.78],[1363305600000,22.04],[1363564800000,21.66],[1363651200000,21.61],[1363737600000,21.79],[1363824000000,21.2],[1363910400000,21.68],[1364169600000,21.38],[1364256000000,21.75],[1364342400000,21.65],[1364428800000,21.9],[1364774400000,21.89],[1364860800000,21.88],[1364947200000,21.05],[1365033600000,21.24],[1365120000000,20.84],[1365379200000,21.47],[1365465600000,21.76],[1365552000000,22.77],[1365638400000,22.89],[1365724800000,23.01],[1365984000000,22.02],[1366070400000,22.47],[1366156800000,22.39],[1366243200000,22.39],[1366329600000,22.59],[1366588800000,22.7],[1366675200000,22.93],[1366761600000,22.76],[1366848000000,23.01],[1366934400000,23.69],[1367193600000,23.85],[1367280000000,23.69],[1367366400000,24.07],[1367452800000,24.15],[1367539200000,24.41],[1367798400000,24.88],[1367884800000,25.45],[1367971200000,25.58],[1368057600000,25.29],[1368144000000,25.29],[1368403200000,24.5],[1368489600000,24.6],[1368576000000,24.7],[1368662400000,25.24],[1368748800000,25.62],[1369008000000,26.44],[1369094400000,27],[1369180800000,26.25],[1369267200000,25.74],[1369353600000,25.17],[1369699200000,25.73],[1369785600000,25.44],[1369872000000,25.58],[1369958400000,25.3],[1370217600000,24.79],[1370304000000,24.31],[1370390400000,23.58],[1370476800000,23.93],[1370563200000,24.43],[1370822400000,25.11],[1370908800000,24.78],[1370995200000,24.53],[1371081600000,24.81],[1371168000000,24.31],[1371427200000,24.15],[1371513600000,24.78],[1371600000000,23.93],[1371686400000,22.87],[1371772800000,21.77],[1372032000000,20.28],[1372118400000,21.21],[1372204800000,21.32],[1372291200000,21.7],[1372377600000,20.82],[1372636800000,20.52]];
    var data4 = [[1341446400000,12.83],[1341532800000,12.79],[1341792000000,12.79],[1341878400000,12.7],[1341964800000,12.56],[1342051200000,12.25],[1342137600000,12.42],[1342396800000,12.35],[1342483200000,12.56],[1342569600000,12.55],[1342656000000,12.62],[1342742400000,11.98],[1343001600000,11.95],[1343088000000,11.9],[1343174400000,11.86],[1343260800000,12.01],[1343347200000,12.27],[1343606400000,12.13],[1343692800000,12.12],[1343779200000,12.12],[1343865600000,12.45],[1343952000000,12.3],[1344211200000,12.61],[1344297600000,12.59],[1344384000000,12.29],[1344470400000,12.22],[1344556800000,13],[1344816000000,12.93],[1344902400000,12.74],[1344988800000,12.8],[1345075200000,12.87],[1345161600000,12.86],[1345420800000,12.89],[1345507200000,12.94],[1345593600000,12.81],[1345680000000,13.31],[1345766400000,13.59],[1346025600000,13.76],[1346112000000,14.19],[1346198400000,14.37],[1346284800000,14.66],[1346371200000,14.32],[1346716800000,14.24],[1346803200000,14.26],[1346889600000,14.39],[1346976000000,14.34],[1347235200000,14.35],[1347321600000,14.68],[1347408000000,14.75],[1347494400000,14.9],[1347580800000,15.56],[1347840000000,15.32],[1347926400000,15.55],[1348012800000,15.56],[1348099200000,15.15],[1348185600000,15.49],[1348444800000,15.9],[1348531200000,15.73],[1348617600000,15.53],[1348704000000,15.62],[1348790400000,15.41],[1349049600000,15.44],[1349136000000,15.41],[1349222400000,15.57],[1349308800000,15.28],[1349395200000,15.57],[1349654400000,15.56],[1349740800000,15.62],[1349827200000,15.6],[1349913600000,15.91],[1350000000000,15.97],[1350259200000,15.98],[1350345600000,16.34],[1350432000000,16.54],[1350518400000,16.6],[1350604800000,16.35],[1350864000000,16.04],[1350950400000,15.72],[1351036800000,15.57],[1351123200000,16.69],[1351209600000,16.77],[1351641600000,16.82],[1351728000000,16.45],[1351814400000,16.55],[1352073600000,16.56],[1352160000000,16.66],[1352246400000,16.26],[1352332800000,16.03],[1352419200000,16.06],[1352678400000,16.43],[1352764800000,16.6],[1352851200000,16.5],[1352937600000,15.86],[1353024000000,15.97],[1353283200000,16.63],[1353369600000,17.08],[1353456000000,17.99],[1353628800000,18.24],[1353888000000,18.14],[1353974400000,18.08],[1354060800000,17.96],[1354147200000,17.94],[1354233600000,17.58],[1354492800000,17.91],[1354579200000,17.76],[1354665600000,17.25],[1354752000000,17],[1354838400000,16.84],[1355097600000,16.78],[1355184000000,16.77],[1355270400000,16.97],[1355356800000,17],[1355443200000,16.8],[1355702400000,16.6],[1355788800000,17.14],[1355875200000,16.86],[1355961600000,16.98],[1356048000000,16.73],[1356307200000,17.02],[1356480000000,16.89],[1356566400000,16.95],[1356652800000,17.48],[1356912000000,17.43],[1357084800000,17.99],[1357171200000,17.99],[1357257600000,18.68],[1357516800000,19.2],[1357603200000,19.12],[1357689600000,19.36],[1357776000000,19.56],[1357862400000,19.98],[1358121600000,19.99],[1358208000000,19.9],[1358294400000,19.92],[1358380800000,20.01],[1358467200000,20.04],[1358812800000,20.53],[1358899200000,20.51],[1358985600000,20.5],[1359072000000,20.63],[1359331200000,20.33],[1359417600000,20.47],[1359504000000,20.5],[1359590400000,20.36],[1359676800000,20.39],[1359936000000,20.13],[1360022400000,20.24],[1360108800000,20.36],[1360195200000,20.5],[1360281600000,20.54],[1360540800000,21.44],[1360627200000,20.92],[1360713600000,20.49],[1360800000000,20.97],[1360886400000,21.4],[1361232000000,22.8],[1361318400000,21.98],[1361404800000,22.15],[1361491200000,22.38],[1361750400000,22.13],[1361836800000,22.01],[1361923200000,22.08],[1362009600000,23.03],[1362096000000,22.85],[1362355200000,22.67],[1362441600000,22.98],[1362528000000,22.96],[1362614400000,22.6],[1362700800000,22.35],[1362960000000,22.44],[1363046400000,21.76],[1363132800000,22.41],[1363219200000,21.78],[1363305600000,22.04],[1363564800000,21.66],[1363651200000,21.61],[1363737600000,21.79],[1363824000000,21.2],[1363910400000,21.68],[1364169600000,21.38],[1364256000000,21.75],[1364342400000,21.65],[1364428800000,21.9],[1364774400000,21.89],[1364860800000,21.88],[1364947200000,21.05],[1365033600000,21.24],[1365120000000,20.84],[1365379200000,21.47],[1365465600000,21.76],[1365552000000,22.77],[1365638400000,22.89],[1365724800000,23.01],[1365984000000,22.02],[1366070400000,22.47],[1366156800000,22.39],[1366243200000,22.39],[1366329600000,22.59],[1366588800000,22.7],[1366675200000,22.93],[1366761600000,22.76],[1366848000000,23.01],[1366934400000,23.69],[1367193600000,23.85],[1367280000000,23.69],[1367366400000,24.07],[1367452800000,24.15],[1367539200000,24.41],[1367798400000,24.88],[1367884800000,25.45],[1367971200000,25.58],[1368057600000,25.29],[1368144000000,25.29],[1368403200000,24.5],[1368489600000,24.6],[1368576000000,24.7],[1368662400000,25.24],[1368748800000,25.62],[1369008000000,26.44],[1369094400000,27],[1369180800000,26.25],[1369267200000,25.74],[1369353600000,25.17],[1369699200000,25.73],[1369785600000,25.44],[1369872000000,25.58],[1369958400000,25.3],[1370217600000,24.79],[1370304000000,24.31],[1370390400000,23.58],[1370476800000,23.93],[1370563200000,24.43],[1370822400000,25.11],[1370908800000,24.78],[1370995200000,24.53],[1371081600000,24.81],[1371168000000,24.31],[1371427200000,24.15],[1371513600000,24.78],[1371600000000,23.93],[1371686400000,22.87],[1371772800000,21.77],[1372032000000,20.28],[1372118400000,21.21],[1372204800000,21.32],[1372291200000,21.7],[1372377600000,20.82],[1372636800000,20.52],[1372723200000,20.85],[1372809600000,20.14],[1372982400000,19.73],[1373241600000,19.22],[1373328000000,19.2],[1373414400000,18.87],[1373500800000,20.05],[1373587200000,20.2],[1373846400000,20.33],[1373932800000,20.39],[1374019200000,20.47],[1374105600000,21.28],[1374192000000,21.75],[1374451200000,22.6],[1374537600000,22.66],[1374624000000,22.42],[1374710400000,22.41],[1374796800000,22.22],[1375056000000,22.15],[1375142400000,22.25],[1375228800000,22.2],[1375315200000,22.85],[1375401600000,22.96],[1375660800000,23.12],[1375747200000,22.76],[1375833600000,22.93],[1375920000000,22.26],[1376006400000,21.93],[1376265600000,21.01],[1376352000000,20.64],[1376438400000,20.49],[1376524800000,20.05],[1376611200000,20.14],[1376870400000,19.8],[1376956800000,19.82],[1377043200000,19.37],[1377129600000,19.44],[1377216000000,19.62],[1377475200000,19.7],[1377561600000,19.29],[1377648000000,19.38],[1377734400000,19.71],[1377820800000,19.33],[1378166400000,19.6],[1378252800000,19.91],[1378339200000,19.96],[1378425600000,20.01],[1378684800000,20.4],[1378771200000,20.2],[1378857600000,20.19],[1378944000000,19.95],[1379030400000,20.12],[1379289600000,20.22],[1379376000000,20.73],[1379462400000,21.52],[1379548800000,21.95],[1379635200000,20.95],[1379894400000,20.41],[1379980800000,19.88],[1380067200000,19.63],[1380153600000,19.98],[1380240000000,19.8],[1380499200000,19.86],[1380585600000,19.61],[1380672000000,19.59],[1380758400000,19.84],[1380844800000,19.92],[1381104000000,19.98],[1381190400000,19.5],[1381276800000,19.8],[1381363200000,20.05],[1381449600000,20.38],[1381708800000,20.43],[1381795200000,20.2],[1381881600000,20.73],[1381968000000,21.36],[1382054400000,21.41],[1382313600000,21.5],[1382400000000,21.52],[1382486400000,21.17],[1382572800000,21.15],[1382659200000,21.78],[1382918400000,22.28],[1383004800000,22.39],[1383091200000,22.27],[1383177600000,22.22],[1383264000000,22.47],[1383523200000,22.53],[1383609600000,22.08],[1383696000000,22.19],[1383782400000,21.84],[1383868800000,21.79],[1384128000000,21.81],[1384214400000,21.62],[1384300800000,21.52],[1384387200000,21.54],[1384473600000,21.78],[1384732800000,21.75],[1384819200000,21.49],[1384905600000,21.56],[1384992000000,21.49],[1385078400000,21.83],[1385337600000,21.99],[1385424000000,22.15],[1385510400000,21.99],[1385683200000,22.19],[1385942400000,22.78],[1386028800000,22.4],[1386115200000,22.64],[1386201600000,22.42],[1386288000000,22.15],[1386547200000,22.35],[1386633600000,22.4],[1386720000000,21.74],[1386806400000,21.67],[1386892800000,21.47],[1387152000000,21.39],[1387238400000,21.21],[1387324800000,21.4],[1387411200000,21.44],[1387497600000,21.5],[1387756800000,21.5],[1387843200000,21.37],[1388016000000,21.48],[1388102400000,21.7],[1388361600000,21.48],[1388448000000,21.34],[1388620800000,21.32],[1388707200000,21.73],[1388966400000,21.78],[1389052800000,22.22],[1389139200000,21.91],[1389225600000,22.05],[1389312000000,22.25],[1389571200000,22.4],[1389657600000,22.66],[1389744000000,22.86],[1389830400000,22.86],[1389916800000,22.81],[1390262400000,22.75],[1390348800000,22.98],[1390435200000,22.6],[1390521600000,22.13],[1390780800000,21.55],[1390867200000,22.12],[1390953600000,21.87],[1391040000000,22.52],[1391126400000,22.34],[1391385600000,21.07],[1391472000000,21.64],[1391558400000,21.68],[1391644800000,21.88],[1391731200000,22.1],[1391990400000,22.32],[1392076800000,22.41],[1392163200000,23.59],[1392249600000,23.42],[1392336000000,23.83],[1392681600000,24.8],[1392768000000,25.62],[1392854400000,24.23],[1392940800000,24],[1393200000000,24.46],[1393286400000,24.12],[1393372800000,24.11],[1393459200000,23.97],[1393545600000,24.22],[1393804800000,23.79],[1393891200000,24.22],[1393977600000,24.15],[1394064000000,23.93],[1394150400000,23.85],[1394409600000,23.91],[1394496000000,23.52],[1394582400000,24.16],[1394668800000,24.3],[1394755200000,24],[1395014400000,24.82],[1395100800000,25.51],[1395187200000,25.29],[1395273600000,25.52],[1395360000000,25.77],[1395619200000,25.33],[1395705600000,25.41],[1395792000000,25.49],[1395878400000,25.14],[1395964800000,25.26],[1396224000000,24.97],[1396310400000,25.38],[1396396800000,25.51],[1396483200000,25.25],[1396569600000,25.42],[1396828800000,25.03],[1396915200000,25.12],[1397001600000,25.47],[1397088000000,25.14],[1397174400000,25.03],[1397433600000,25.27],[1397520000000,25.21],[1397606400000,25.57],[1397692800000,25.4],[1398038400000,25.63],[1398124800000,26.34],[1398211200000,26.41],[1398297600000,26.39],[1398384000000,25.6],[1398643200000,25.17],[1398729600000,25.62],[1398816000000,25.43],[1398902400000,25],[1398988800000,24.84],[1399248000000,24.84],[1399334400000,24.44],[1399420800000,24.42],[1399507200000,23.51],[1399593600000,23.29],[1399852800000,23.69],[1399939200000,24.08],[1400025600000,23.91],[1400112000000,22.99],[1400198400000,23.87],[1400457600000,23.84],[1400544000000,23.47],[1400630400000,23.87],[1400716800000,23.72],[1400803200000,23.6],[1401148800000,23.87],[1401235200000,23.63],[1401321600000,23.75],[1401408000000,24.25],[1401667200000,24.51],[1401753600000,24.96],[1401840000000,25.25],[1401926400000,25.64],[1402012800000,26],[1402272000000,25.74],[1402358400000,25.64],[1402444800000,25.59],[1402531200000,25.24],[1402617600000,25.36],[1402876800000,25.29],[1402963200000,25.52],[1403049600000,25.76],[1403136000000,25.9],[1403222400000,25.5],[1403481600000,25.52],[1403568000000,24.93],[1403654400000,24.96],[1403740800000,25.49],[1403827200000,25.51],[1404086400000,25.88],[1404172800000,26.05],[1404259200000,26.18],[1404345600000,26.57]];

    function stockCharts(tabName) {
        var items = Array(data1, data2, data3, data4);
        var randomData = items[Math.floor(Math.random() * items.length)];
        var custom_colors = ['#C9625F', '#18A689', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#8085e8', '#91e8e1'];
        var custom_color = custom_colors[Math.floor(Math.random() * custom_colors.length)];

        // Create the chart
        $('#stock-' + tabName).highcharts('StockChart', {
            chart: {
                height: 286,
                borderColor: '#DE0E13'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            rangeSelector: {
                inputEnabled: false,
                selected: 3
            },
            colors: [custom_color],
            scrollbar: {
                enabled: false
            },
            navigator: {
                enabled: false
            },
            xAxis: {
                lineColor: '#EFEFEF',
                tickColor: '#EFEFEF',
            },
            yAxis: {
                gridLineColor: '#EFEFEF'
            },
            series: [{
                name: tabName,
                data: randomData,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    }
    stockCharts('sony');
    $('.stock1 .nav-tabs a').on('click', function() {
        stockCharts($(this).attr('id'));
    });

    function stockCharts2(tabName) {
        var items = Array(data1, data2, data3, data4);
        var randomData = items[Math.floor(Math.random() * items.length)];
        var custom_colors = ['#C9625F', '#18A689', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#8085e8', '#91e8e1'];
        var custom_color = custom_colors[Math.floor(Math.random() * custom_colors.length)];
        // Create the chart
        $('#stock-' + tabName).highcharts('StockChart', {
            chart: {
                height: 277,
                plotBorderColor: '#C21414',
                plotBorderColor: '#C21414'
            },
            credits: {
                enabled: false
            },
            colors: [custom_color],
            exporting: {
                enabled: false
            },
            rangeSelector: {
                inputEnabled: false,
                selected: 2
            },
            scrollbar: {
                enabled: false
            },
            navigator: {
                enabled: false
            },
            xAxis: {
                gridLineColor: '#C21414',
                gridLineColor: '#C21414',
                lineColor: '#EFEFEF',
                tickColor: '#EFEFEF',
            },
            yAxis: {
                gridLineColor: '#EFEFEF',
                lineColor: '#B324B3'
            },
            series: [{
                name: tabName,
                data: randomData,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    }
    stockCharts2('Civic');
    stockCharts2('Fit');
    stockCharts2('City');
    stockCharts2('HR-V');
    $('.stock2 .nav-tabs a').on('click', function() {
        $('.stock2 .tab-content .tab-pane.active').fadeOut(300, function() {
            $('.stock2 .tab-content .tab-pane.active').fadeIn(300);
        });
        var current_stock = $(this).attr('id');
        var current_value = $(this).data('value');
        var current_color = $(this).data('color');
        title = current_stock.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        $('.title-stock h1').text(title);
        $('.title-stock span').removeClass().addClass('c-' + current_color).text(current_value);
        stockCharts2(current_stock);
    });

    /**** Small Financial Widget ****/
    function smallStockCharts(tabName, dataNumber) {
        var items = Array(data1, data2, data3, data4);
        var randomData = items[Math.floor(Math.random() * items.length)];
        // Create the chart
        $('#stock-' + tabName + '-sm').highcharts('StockChart', {
            chart: {
                height: 149,
                plotBorderColor: '#C21414',
                plotBorderColor: '#C21414',
                backgroundColor: 'transparent',
                spacingRight: 0,
                spacingLeft: 0,
                spacingBottom: 0,
                spacingTop: 0,
                marginBottom: 0
            },
            credits: {
                enabled: false
            },
            colors: ['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.3)'],
            exporting: {
                enabled: false
            },
            rangeSelector: {
                selected: 0,
                enabled: false
            },
            scrollbar: {
                enabled: false
            },
            navigator: {
                enabled: false
            },
            navigation: {
                buttonOptions: {
                    enabled: false
                }
            },
            xAxis: {
                gridLineColor: 'transparent',
                gridLineColor: 'transparent',
                lineColor: 'transparent',
                tickColor: 'transparent',
                minorGridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },
            yAxis: {
                gridLineColor: 'transparent',
                gridLineColor: 'transparent',
                lineColor: 'transparent',
                labels: {
                    enabled: false
                }
            },
            series: [{
                name: tabName,
                data: randomData,
                type: 'spline',
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    }
    smallStockCharts('virgin', 2);
    smallStockCharts('ebay', 3);
    smallStockCharts('facebook', 1);

    /**** Column Chart : HighStock ****/
    // create the chart
    var items = Array(data1, data2, data3, data4);
    var randomData = items[Math.floor(Math.random() * items.length)];

    $('#bar-chart').highcharts('StockChart', {
        chart: {
            alignTicks: false,
            height: 130,
            borderColor: '#C9625F',
            backgroundColor: 'transparent',
            spacingTop: 0,
            spacingBottom: 5,
            spacingLeft: 0,
            spacingRight: 0
        },
        rangeSelector: {
            inputEnabled: false,
            selected: 2
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        colors: ['rgba(128, 133, 233,0.8)'],
        xAxis: {
            lineColor: '#e1e1e1',
            tickColor: '#EFEFEF'
        },
        yAxis: {
            gridLineColor: '#e1e1e1'
        },
        series: [{
            type: 'column',
            name: 'Sales Volume',
            data: randomData,
            dataGrouping: {
                units: [[
                    'week', // unit name
                    [1] // allowed multiples
                ], [
                    'month',
                    [1, 2, 3, 4, 6]
                ]]
            }
        }]
    });

    $('*[data-jquery-clock]').each(function() {
        var t = $(this);
        var seconds = new Date().getSeconds(),
            hours = new Date().getHours(),
            mins = new Date().getMinutes(),
            sdegree = seconds * 6,
            hdegree = hours * 30 + (mins / 2),
            mdegree = mins * 6;
        var updateWatch = function() {
            sdegree += 6;
            if (sdegree % 360 == 0) {
                mdegree += 6;
            }
            hdegree += (0.1 / 12);
            var srotate = "rotate(" + sdegree + "deg)",
                hrotate = "rotate(" + hdegree + "deg)",
                mrotate = "rotate(" + mdegree + "deg)";
            $(".jquery-clock-sec", t).css({
                "-moz-transform": srotate,
                "-webkit-transform": srotate,
                '-ms-transform': srotate
            });
            $(".jquery-clock-hour", t).css({
                "-moz-transform": hrotate,
                "-webkit-transform": hrotate,
                '-ms-transform': hrotate
            });
            $(".jquery-clock-min", t).css({
                "-moz-transform": mrotate,
                "-webkit-transform": mrotate,
                '-ms-transform': mrotate
            });
        }
        updateWatch();
        setInterval(function() {
            $(".jquery-clock-sec, .jquery-clock-hour, .jquery-clock-min").addClass('jquery-clock-transitions');
            updateWatch();
        }, 1000);
        $(window).focus(function() {
            $(".jquery-clock-sec, .jquery-clock-hour, .jquery-clock-min").addClass('jquery-clock-transitions');
        });
        $(window).blur(function() {
            $(".jquery-clock-sec, .jquery-clock-hour, .jquery-clock-min").removeClass('jquery-clock-transitions');
        });
    });

    // panel-stat-chart, visitors-chart
    var widgetMapHeight = $('.widget-map').height();
    var pstatHeadHeight = $('.panel-stat-chart').parent().find('.panel-header').height() + 12;
    var pstatBodyHeight = $('.panel-stat-chart').parent().find('.panel-body').height() + 15;
    var pstatheight = widgetMapHeight - pstatHeadHeight - pstatBodyHeight + 30;
    $('.panel-stat-chart').css('height', pstatheight);
    var clockHeight = $('.jquery-clock ').height();
    var widgetProgressHeight = $('.widget-progress-bar').height();
    
    var visitorsData = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "New Visitors",
                backgroundColor: "rgba(200,200,200,0.5)",
                borderColor: "rgba(200,200,200,1)",
                pointBackgroundColor: "rgba(200,200,200,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(200,200,200,1)",
                data: [4275, 4321, 7275, 6512, 5472, 6540, 7542, 5475, 6547, 7454, 9544, 10245]
            },
            {
                label: "Returning visitors",
                backgroundColor: "rgba(49, 157, 181,0.5)",
                borderColor: "rgba(49, 157, 181,0.7)",
                pointBackgroundColor: "rgba(49, 157, 181,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(49, 157, 181,1)",
                data: [3255, 3758, 4538, 2723, 6752, 6534, 8760, 7544, 5424, 4244, 6547, 7857]
            }
        ]
    };
    var chartOptions = {
        tooltips : {
            cornerRadius: 0,
            tooltipTemplate: "dffdff",
            multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>",
        },
        legend:{
            display: false
        },
        backgroundColor:"#fff",
        scales:
        {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }]
        }
    };

    if($('#visitors-chart').length){
        var ctx = document.getElementById("visitors-chart").getContext("2d");
        var myNewChart = new Chart(ctx, {
            type: "line",
            data: visitorsData,
            options: chartOptions
        });
     }

    /* Progress Bar  Widget */
    if ($('.widget-progress-bar').length) {
        $(window).load(function() {
            setTimeout(function() {
                $('.widget-progress-bar .stat1').progressbar();
            }, 900);
            setTimeout(function() {
                $('.widget-progress-bar .stat2').progressbar();
            }, 1200);
            setTimeout(function() {
                $('.widget-progress-bar .stat3').progressbar();
            }, 1500);
            setTimeout(function() {
                $('.widget-progress-bar .stat4').progressbar();
            }, 1800);
        });
    };

   
    
});

function generateNotifDashboard(content) {
    var position = 'topRight';
    if ($('body').hasClass('rtl')) position = 'topLeft';
    var n = noty({
        text: content,
        type: 'success',
        layout: position,
        theme: 'made',
        animation: {
            open: 'animated bounceIn',
            close: 'animated bounceOut'
        },
        timeout: 4500,
        callback: {
            onShow: function() {
                $('#noty_topRight_layout_container, .noty_container_type_success').css('width', 350).css('bottom', 10);
            },
            onCloseClick: function() {
                setTimeout(function() {
                    $('#quickview-sidebar').addClass('open');
                }, 500)
            }
        }
    });
}


