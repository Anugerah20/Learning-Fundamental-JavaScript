var i = '';
      for(var j = 15; j > 0; j--) {
          for(var k = 15; k >= j; k--) {
              i += '*';
          }
              i += '\n';
      }
      for(var m = 14; m > 0; m--) {
          for(var n = 0; n < m; n++) {
              i += '*';
          }
              i += '\n';
      }
      console.info(i);