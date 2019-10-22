const pgp = require('pg-promise')();
var db = pgp('postgres://ejhivrfxrvzsam:e6ea27848d6af9115aa2c68040e674502dbfb9d288840cac04cbda3e90607967@ec2-107-20-167-241.compute-1.amazonaws.com:5432/d80ue59kfg9h7u?ssl=true');

function getAllPoint(req, res) {
    db.any('select * FROM public."Point" order by p_id')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            res.status(500)
                .json({
                    status: 'failed',
                    data: data,
                    message: 'Failed to Retrieved ALL products'
                });
        })
}

function getPointName(req, res) {
    console.log("req = "+req.params.name);
    var x = req.params.name;
    console.log('type'+typeof(x));
    db.any('select * from public."Point" where p_name = ' + "'"+req.params.name+"'" ).then(function (data) {
        res.status(200).json( 
               data      
        );
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({
            status: 'failed',
            data: data,
            message: 'Failed To Retrieved ALL products'
        });
    })
}

function getRoomName(req, res) {
    console.log("req = "+req.params.isRoom);
    var x = req.params.isRoom;
    console.log('type'+typeof(x));
    db.any('select * from public."Point" where "isRoom" = ' + req.params.isRoom ).then(function (data) {
        res.status(200).json( 
               data      
        );
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({
            status: 'failed',
            data: data,
            message: 'Failed To Retrieved ALL products'
        });
    })
}


function getMapInfo(req, res) {
    console.log("req = "+req.params.p_id);
    var x = req.params.isRoom;
    console.log('type'+typeof(x));
    db.any('SELECT * FROM public.map_v1 where p_id = ' + req.params.p_id ).then(function (data) {
        res.status(200).json( 
               data      
        );
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({
            status: 'failed',
            data: data,
            message: 'Failed To Retrieved ALL products'
        });
    })
}

function getAllMapInfo(req, res) {


   
    db.any('SELECT * FROM public.map_v1' ).then(function (data) {
        res.status(200).json( 
               data      
        );
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({
            status: 'failed',
            data: data,
            message: 'Failed To Retrieved ALL products'
        });
    })
}

function getAllDirectionGraphInfo(req, res) {

    db.any('SELECT x, y FROM public."DirectionGraph"' ).then(function (data) {
        res.status(200).json( 
               data      
        );
    }).catch(function (error) {
        console.log(error);
        res.status(500).json({
            status: 'failed',
            data: data,
            message: 'Failed To Retrieved ALL products'
        });
    })
}
module.exports = {
    getAllPoint
    ,getPointName
   ,getRoomName
   ,getMapInfo
   ,getAllMapInfo
   ,getAllDirectionGraphInfo
}