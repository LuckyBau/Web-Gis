var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_1 = format_ADMINISTRASIKECAMATAN_AR_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_1);
var lyr_ADMINISTRASIKECAMATAN_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_1,
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_0.png" /> Biboki Anleu<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_1.png" /> Biboki Feotleu<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_2.png" /> Biboki Moenleu<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_3.png" /> Biboki Selatan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_4.png" /> Biboki Tan Pah<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_5.png" /> Biboki Utara<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_6.png" /> Bikomi Nilulat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_7.png" /> Bikomi Selatan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_8.png" /> Bikomi Tengah<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_9.png" /> Bikomi Utara<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_10.png" /> Insana<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_11.png" /> Insana Barat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_12.png" /> Insana Fafinesu<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_13.png" /> Insana Tengah<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_14.png" /> Insana Utara<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_15.png" /> Kota Kefamenanu<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_16.png" /> Miomaffo Barat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_17.png" /> Miomaffo Tengah<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_18.png" /> Miomaffo Timur<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_19.png" /> Musi<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_20.png" /> Mutis<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_21.png" /> Naibenu<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_22.png" /> Noemuti<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_23.png" /> Noemuti Timur<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_1_24.png" /> <br />'
        });
var format_titik_lokasi_2 = new ol.format.GeoJSON();
var features_titik_lokasi_2 = format_titik_lokasi_2.readFeatures(json_titik_lokasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titik_lokasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titik_lokasi_2.addFeatures(features_titik_lokasi_2);
var lyr_titik_lokasi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titik_lokasi_2, 
                style: style_titik_lokasi_2,
                interactive: true,
                title: '<img src="styles/legend/titik_lokasi_2.png" /> titik_lokasi'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_1.setVisible(true);lyr_titik_lokasi_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_ADMINISTRASIKECAMATAN_AR_1,lyr_titik_lokasi_2];
lyr_ADMINISTRASIKECAMATAN_AR_1.set('fieldAliases', {'FCODE': 'FCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Area': 'SHAPE_Area', });
lyr_titik_lokasi_2.set('fieldAliases', {'Name': 'Name', 'Jmlh_pnddk': 'Jmlh_pnddk', 'Gambar': 'Gambar', });
lyr_ADMINISTRASIKECAMATAN_AR_1.set('fieldImages', {'FCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_titik_lokasi_2.set('fieldImages', {'Name': 'RelationReference', 'Jmlh_pnddk': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_ADMINISTRASIKECAMATAN_AR_1.set('fieldLabels', {'FCODE': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'header label', 'SHAPE_Area': 'inline label', });
lyr_titik_lokasi_2.set('fieldLabels', {'Name': 'no label', 'Jmlh_pnddk': 'no label', 'Gambar': 'no label', });
lyr_titik_lokasi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});