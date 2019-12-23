
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "adm3_0": {
            "type": "geojson",
            "data": json_adm3_0
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_adm3_0_0",
            "type": "fill",
            "source": "adm3_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#e5b636'}
        }
,
        {
            "id": "lyr_adm3_0_1",
            "type": "symbol",
            "source": "adm3_0",
            "layout": {'text-offset': [0.0, 0.0], 'text-field': ['get', 'adm3_nm'], 'text-size': 10.0, 'text-font': ['Open Sans Regular']},
            "paint": {'text-color': '#000000'}
        }
],
}