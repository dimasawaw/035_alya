var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_alyabisa_1 = new ol.format.GeoJSON();
var features_alyabisa_1 = format_alyabisa_1.readFeatures(json_alyabisa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alyabisa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alyabisa_1.addFeatures(features_alyabisa_1);
var lyr_alyabisa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_alyabisa_1, 
                style: style_alyabisa_1,
                interactive: true,
    title: 'alya bisa<br />\
    <img src="styles/legend/alyabisa_1_0.png" /> Banjar Kemuning<br />\
    <img src="styles/legend/alyabisa_1_1.png" /> Betro<br />\
    <img src="styles/legend/alyabisa_1_2.png" /> Buncitan<br />\
    <img src="styles/legend/alyabisa_1_3.png" /> Kalanganyar<br />\
    <img src="styles/legend/alyabisa_1_4.png" /> Pabean<br />\
    <img src="styles/legend/alyabisa_1_5.png" /> Pepe<br />\
    <img src="styles/legend/alyabisa_1_6.png" /> Sedati Gede<br />\
    <img src="styles/legend/alyabisa_1_7.png" /> Segoro Tambak<br />\
    <img src="styles/legend/alyabisa_1_8.png" /> Tambak Cemandi<br />\
    <img src="styles/legend/alyabisa_1_9.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_alyabisa_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_alyabisa_1];
lyr_alyabisa_1.set('fieldAliases', {'id': 'id', 'desa': 'desa', });
lyr_alyabisa_1.set('fieldImages', {'id': 'TextEdit', 'desa': 'TextEdit', });
lyr_alyabisa_1.set('fieldLabels', {'id': 'no label', 'desa': 'no label', });
lyr_alyabisa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});