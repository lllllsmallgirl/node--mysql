// 浏览器=》服务器=》浏览器
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'39.97.105.230',
    user:'root',
    password:'84670681',
    database:'class219'
});
connection.connect((err) => {
    if(err){
        console.log('---:'+err);
        return;
    }
    console.log('连接成功')
});

var app = require('express')();
var http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use('/',require('express').static('/Users/zm/Documents/GitHub/node--mysql'));

app.get('/', (req, res) => {
    res.sendFile( '/Users/zm/Documents/GitHub/node--mysql/mainEngine.html'); //文件转移了 路径也要改！！！
    // res.sendFile(__dirname + '/img/ii.PNG');
    // console.log("Request for " + req.url + " received.");
  });
var i = 0;
io.on('connection', (socket) => {
  // i+=1;
  // console.log('用户'+i+'进入')
  console.log('a user connected');
    // socket.on('chat message', (msg) => {
    //   io.emit('chat message',msg)
    // });

    socket.on('thandleclick',(tx)=>{
        let modsql = "update data set Value=? where Name='thandlex'";
        let modsqlParams = [String(tx)];

        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });

        
        io.emit('thandleclick',tx);
    });

    socket.on('blever',(e1,e2,e3)=>{
        console.log('e3',e3);

        let modsql = "update data set Value=? where Name='brmp'";
        let modsqlParams = [String(e1)];

        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        let modsql2 = "update data set Value=? where Name='t'";
        let modsqlParams2 = [String(e2)];

        connection.query(modsql2,modsqlParams2,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });


        io.emit('blever',e1,e2,e3);
    })

    socket.on('tlever',(e1,e2,e3)=>{
      console.log('e3',e3);
      let modsql = "update data set Value=? where Name='trmp'";
      let modsqlParams = [String(e1)];

      connection.query(modsql,modsqlParams,(err,rs)=>{
          if(err){
              console.log(err.message);
              return;
          }
          console.log('modify data',rs);
      });
      let modsql1 = "update data set Value=? where Name='tb'";
      let modsqlParams1 = [String(e2)];

      connection.query(modsql1,modsqlParams1,(err,rs)=>{
          if(err){
              console.log(err.message);
              return;
          }
          console.log('modify data',rs);
      });


      io.emit('tlever',e1,e2,e3);
  })

  socket.on('conbeforeclick',(e1)=>{
    // console.log('sio',e1);
    let modsql = "update data set Value=? where Name='sio'";
    let modsqlParams = [String(e1)];

    connection.query(modsql,modsqlParams,(err,rs)=>{
        if(err){
            console.log(err.message);
            return;
        }
        console.log('modify data',rs);
    });

    io.emit('conbeforeclick',e1);
})

      socket.on('conReadyCclick',(e1)=>{
        // console.log('sio',e1);
        let modsql = "update data set Value=? where Name='sio'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('conReadyCclick',e1);
      })

      socket.on('conOnSeaclick',(e1)=>{
        // console.log('sio',e1);
        let modsql = "update data set Value=? where Name='sio'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('conOnSeaclick',e1);
      })

      socket.on('wheeltoumingclick',(e1)=>{
        let modsql = "update data set Value=? where Name='z'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('wheeltoumingclick',e1);
      })

      socket.on('wheeltoumingleftclick',(e1)=>{
        let modsql = "update data set Value=? where Name='z'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('wheeltoumingleftclick',e1);
      })

      socket.on('pstartclick',(e1)=>{
        let modsql = "update data set Value=? where Name='lsio'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('pstartclick',e1);
      })

      socket.on('pstopmousedown',(e1,e2,e3,e4,e5,e6,e7)=>{
        let modsql1 = "update data set Value=? where Name='yd'";
        let modsqlParams1 = [String(e1)];
    
        connection.query(modsql1,modsqlParams1,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        let modsql2 = "update data set Value=? where Name='ydx'";
        let modsqlParams2 = [String(e2)];
    
        connection.query(modsql2,modsqlParams2,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        let modsql3 = "update data set Value=? where Name='rmp'";
        let modsqlParams3 = [String(e3)];
    
        connection.query(modsql3,modsqlParams3,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        let modsql4 = "update data set Value=? where Name='rmpx'";
        let modsqlParams4 = [String(e4)];
    
        connection.query(modsql4,modsqlParams4,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        let modsql5 = "update data set Value=? where Name='brmp'";
        let modsqlParams5 = [String(e5)];
    
        connection.query(modsql5,modsqlParams5,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        let modsql6 = "update data set Value=? where Name='trmp'";
        let modsqlParams6 = [String(e6)];
    
        connection.query(modsql6,modsqlParams6,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        let modsql7 = "update data set Value=? where Name='lrmp'";
        let modsqlParams7 = [String(e7)];
    
        connection.query(modsql7,modsqlParams7,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('pstopmousedown',e1,e2,e3,e4,e5,e6,e7);
      })

      socket.on('pstartup',(e1)=>{
        let modsql = "update data set Value=? where Name='lsio'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('pstartup',e1);
      })

      socket.on('lbtn1click',(e1)=>{
        let modsql = "update data set Value=? where Name='lbtn1sio'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('lbtn1click',e1);
      })

      socket.on('lbtn2click',(e1)=>{
        let modsql = "update data set Value=? where Name='lbtn1sio'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('lbtn2click',e1);
      })

      socket.on('lbtn3click',(e1)=>{
        let modsql = "update data set Value=? where Name='wx'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('lbtn3click',e1);
      })

      socket.on('lbtn4click',(e1)=>{
        let modsql = "update data set Value=? where Name='impactwheelx'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('lbtn4click',e1);
      })

      socket.on('l2dbtn1click',(e1)=>{
        
        io.emit('l2dbtn1click',e1);
      })

      socket.on('l2dbtn2click',(e1)=>{
        
        io.emit('l2dbtn2click',e1);
      })

      socket.on('l2dbtn3click',(e1)=>{
        
        io.emit('l2dbtn3click',e1);
      })

      socket.on('l2dbtn4click',(e1)=>{
        
        io.emit('l2dbtn4click',e1);
      })

      socket.on('l2dbtn5click',(e1,e2,e3)=>{
        
        io.emit('l2dbtn5click',e1,e2,e3);
      })

      socket.on('l2dbtn6click',(e1,e2,e3)=>{
        
        io.emit('l2dbtn6click',e1,e2,e3);
      })

      socket.on('l2dbtnStartclick',(e1,e2)=>{
        
        io.emit('l2dbtnStartclick',e1,e2);
      })

      socket.on('l2dbtnStartup',(e1)=>{
        
        io.emit('l2dbtnStartup',e1);
      })

      socket.on('l2dbtnstopmousedown',(e1,e2,e3,e4,e5,e6,e7)=>{
        
        io.emit('l2dbtnstopmousedown',e1,e2,e3,e4,e5,e6,e7);
      })

      socket.on('valve1click',(e1)=>{
        let modsql = "update data set Value=? where Name='value122x'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('valve1click',e1);
      })

      socket.on('valve2click',(e1)=>{
        let modsql = "update data set Value=? where Name='valueMainx'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('valve2click',e1);
      })

      socket.on('valve3click',(e1)=>{
        let modsql = "update data set Value=? where Name='value118x'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('valve3click',e1);
      })

      socket.on('valve4click',(e1)=>{
        let modsql = "update data set Value=? where Name='value16x'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('valve4click',e1);
      })

      socket.on('valve5click',(e1)=>{
        let modsql = "update data set Value=? where Name='value3x'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('valve5click',e1);
      })

      socket.on('valve6click',(e1)=>{
        let modsql = "update data set Value=? where Name='value116x'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('valve6click',e1);
      })

      socket.on('stecrclick',(e1)=>{
        let modsql = "update data set Value=? where Name='ecrlocation'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('stecrclick',e1);
      })

      socket.on('sbecrclick',(e1)=>{
        let modsql = "update data set Value=? where Name='ecrlocation'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('sbecrclick',e1);
      })

      socket.on('slecrclick',(e1)=>{
        let modsql = "update data set Value=? where Name='ecrlocation'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('slecrclick',e1);
      })

      socket.on('splecrclick',(e1)=>{
        let modsql = "update data set Value=? where Name='ecrlocation'";
        let modsqlParams = [String(e1)];
    
        connection.query(modsql,modsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('modify data',rs);
        });
        io.emit('splecrclick',e1);
      })
  });




http.listen(3000, () => {
    console.log('listening on *:3000');
  });