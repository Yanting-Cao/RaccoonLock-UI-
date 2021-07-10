var t, type, b;
var n, c;
var TimeRef, TypeRef, BoolRef; 
var TimeL=[], TypeL=[], BoolRefL=[];
c=0;
    function Renew(){
        if(c==0){
            n=c;
            TimeRef= firebase.database().ref('Device_ID/Event/E_Time');
            TimeRef.on('value', (snapshot) => {
                t = snapshot.val();
                for(var i = 0;i < c+1;i++){if(TimeL.indexOf(t) == -1)TimeL.push(t);}
                console.log(TimeL);
                document.getElementById('Time1').innerHTML = TimeL[n];
            });

            TypeRef= firebase.database().ref('Device_ID/Event/type');
            TypeRef.on('value', (snapshot) => {
                type = snapshot.val();
                TypeL.push(type);
if(TypeL.length-c>0){
    for(i=0;i < TypeL.length-c-1;i++){
        TypeL.pop();
    }}
console.log(TypeL);
                document.getElementById('Type1').innerHTML = TypeL[n] + " Detected";
            });
            BoolRef= firebase.database().ref('Device_ID/Event/bool');
            BoolRef.on('value', (snapshot) => {
                b = snapshot.val();
                BoolRefL.push(b);
if(BoolRefL.length-c>0){
    for(i=0;i < BoolRefL.length-c-1;i++){
        BoolRefL.pop();
    }}
console.log(BoolRefL);
                if(BoolRefL[n]=="false"){
                    document.getElementById('Result1').innerHTML = "N/A";
                }else{
                    document.getElementById('Result1').innerHTML = "Alarm";
                }
            });
            if(TimeL.length>c+1) c++;
        }else if(c==1){
            n=c;
            TimeRef= firebase.database().ref('Device_ID/Event/E_Time');
            TimeRef.on('value', (snapshot) => {
                t = snapshot.val();
                for(var i = 0;i < c+1;i++){if(TimeL.indexOf(t) == -1)TimeL.push(t);}
                console.log(TimeL);
                document.getElementById('Time1').innerHTML = TimeL[n];
                document.getElementById('Time2').innerHTML = TimeL[n-1];
            
            });

            TypeRef= firebase.database().ref('Device_ID/Event/type');
            TypeRef.on('value', (snapshot) => {
                type = snapshot.val();
                TypeL.push(type);
if(TypeL.length-c>0){
    for(i=0;i < TypeL.length-c-1;i++){
        TypeL.pop();
    }}
console.log(TypeL);

                document.getElementById('Type1').innerHTML = TypeL[n] + " Detected";
                document.getElementById('Type2').innerHTML = TypeL[n-1] + " Detected";
            });
                BoolRef= firebase.database().ref('Device_ID/Event/bool');
                BoolRef.on('value', (snapshot) => {
                    b = snapshot.val();
                    BoolRefL.push(b);
if(BoolRefL.length-c>0){
    for(i=0;i < BoolRefL.length-c-1;i++){
        BoolRefL.pop();
    }}
console.log(BoolRefL);
                if(BoolRefL[n]!=BoolRefL[n-1]){
                if(BoolRefL[n]=="false"){
                    document.getElementById('Result1').innerHTML = "N/A";
                }else{
                    document.getElementById('Result1').innerHTML = "Alarm";
                }
                if(BoolRefL[n-1]=="false"){
                    document.getElementById('Result2').innerHTML = "N/A";
                }else{
                    document.getElementById('Result2').innerHTML = "Alarm";
                }}
            });
             if(TimeL.length>c+1) c++;
        }else if(c==2){
            n=c;
            TimeRef= firebase.database().ref('Device_ID/Event/E_Time');
            TimeRef.on('value', (snapshot) => {
                t = snapshot.val();
                for(var i = 0;i < c+1;i++){if(TimeL.indexOf(t) == -1)TimeL.push(t);}
                console.log(TimeL);
                document.getElementById('Time1').innerHTML = TimeL[n];
                document.getElementById('Time2').innerHTML = TimeL[n-1];
                document.getElementById('Time3').innerHTML = TimeL[n-2];
            });

            TypeRef= firebase.database().ref('Device_ID/Event/type');
            TypeRef.on('value', (snapshot) => {
                type = snapshot.val();
                TypeL.push(type);
if(TypeL.length-c>0){
    for(i=0;i < TypeL.length-c-1;i++){
        TypeL.pop();
    }}
console.log(TypeL);

                document.getElementById('Type1').innerHTML = TypeL[n] + " Detected";
                document.getElementById('Type2').innerHTML = TypeL[n-1] + " Detected";
                document.getElementById('Type3').innerHTML = TypeL[n-2] + " Detected";
            });
                BoolRef= firebase.database().ref('Device_ID/Event/bool');
                BoolRef.on('value', (snapshot) => {
                    b = snapshot.val();
                    BoolRefL.push(b);
if(BoolRefL.length-c>0){
    for(i=0;i < BoolRefL.length-c-1;i++){
        BoolRefL.pop();
    }}
console.log(BoolRefL);
                if(BoolRefL[n]=="false"){
                    document.getElementById('Result1').innerHTML = "N/A";
                }else{
                    document.getElementById('Result1').innerHTML = "Alarm";
                }
                if(BoolRefL[n-1]=="false"){
                    document.getElementById('Result2').innerHTML = "N/A";
                }else{
                    document.getElementById('Result2').innerHTML = "Alarm";
                }
                if(BoolRefL[n-2]=="false"){
                    document.getElementById('Result3').innerHTML = "N/A";
                }else{
                    document.getElementById('Result3').innerHTML = "Alarm";
                }
            });
             if(TimeL.length>c+1) c++;
        }else if(c==3){
            n=c;
            TimeRef= firebase.database().ref('Device_ID/Event/E_Time');
            TimeRef.on('value', (snapshot) => {
                t = snapshot.val();
                for(var i = 0;i < c+1;i++){if(TimeL.indexOf(t) == -1)TimeL.push(t);}
                console.log(TimeL);
                document.getElementById('Time1').innerHTML = TimeL[n];
                document.getElementById('Time2').innerHTML = TimeL[n-1];
                document.getElementById('Time3').innerHTML = TimeL[n-2];
                document.getElementById('Time4').innerHTML = TimeL[n-3];
            });

            TypeRef= firebase.database().ref('Device_ID/Event/type');
            TypeRef.on('value', (snapshot) => {
                type = snapshot.val();
                TypeL.push(type);
if(TypeL.length-c>0){
    for(i=0;i < TypeL.length-c-1;i++){
        TypeL.pop();
    }}
console.log(TypeL);

                document.getElementById('Type1').innerHTML = TypeL[n] + " Detected";
                document.getElementById('Type2').innerHTML = TypeL[n-1] + " Detected";
                document.getElementById('Type3').innerHTML = TypeL[n-2] + " Detected";
                document.getElementById('Type4').innerHTML = TypeL[n-3] + " Detected";
            });
                BoolRef= firebase.database().ref('Device_ID/Event/bool');
                BoolRef.on('value', (snapshot) => {
                    b = snapshot.val();
                    BoolRefL.push(b);
if(BoolRefL.length-c>0){
    for(i=0;i < BoolRefL.length-c-1;i++){
        BoolRefL.pop();
    }}
console.log(BoolRefL);
                if(BoolRefL[n]=="false"){
                    document.getElementById('Result1').innerHTML = "N/A";
                }else{
                    document.getElementById('Result1').innerHTML = "Alarm";
                }
                if(BoolRefL[n-1]=="false"){
                    document.getElementById('Result2').innerHTML = "N/A";
                }else{
                    document.getElementById('Result2').innerHTML = "Alarm";
                }
                if(BoolRefL[n-2]=="false"){
                    document.getElementById('Result3').innerHTML = "N/A";
                }else{
                    document.getElementById('Result3').innerHTML = "Alarm";
                }
                if(BoolRefL[n-3]=="false"){
                    document.getElementById('Result4').innerHTML = "N/A";
                }else{
                    document.getElementById('Result4').innerHTML = "Alarm";
                }
            });
             if(TimeL.length>c+1) c++;
        }else if(c==4){
            n=c;
            TimeRef= firebase.database().ref('Device_ID/Event/E_Time');
            TimeRef.on('value', (snapshot) => {
                t = snapshot.val();
                for(var i = 0;i < c+1;i++){if(TimeL.indexOf(t) == -1)TimeL.push(t);}
                  
                document.getElementById('Time1').innerHTML = TimeL[n];
                document.getElementById('Time2').innerHTML = TimeL[n-1];
                document.getElementById('Time3').innerHTML = TimeL[n-2];
                document.getElementById('Time4').innerHTML = TimeL[n-3];
                document.getElementById('Time5').innerHTML = TimeL[n-4];
            });
console.log(TimeL);
            TypeRef= firebase.database().ref('Device_ID/Event/type');
            TypeRef.on('value', (snapshot) => {
                type = snapshot.val();
                TypeL.push(type);
if(TypeL.length-c>0){
    for(i=0;i < TypeL.length-c-1;i++){
        TypeL.pop();
    }}
console.log(TypeL);

                document.getElementById('Type1').innerHTML = TypeL[n] + " Detected";
                document.getElementById('Type2').innerHTML = TypeL[n-1] + " Detected";
                document.getElementById('Type3').innerHTML = TypeL[n-2] + " Detected";
                document.getElementById('Type4').innerHTML = TypeL[n-3] + " Detected";
                document.getElementById('Type5').innerHTML = TypeL[n-4] + " Detected";
            });
                BoolRef= firebase.database().ref('Device_ID/Event/bool');
                BoolRef.on('value', (snapshot) => {
                    b = snapshot.val();
                    BoolRefL.push(b);
if(BoolRefL.length-c>0){
    for(i=0;i < BoolRefL.length-c-1;i++){
        BoolRefL.pop();
    }}
console.log(BoolRefL);
                if(BoolRefL[n]=="false"){
                    document.getElementById('Result1').innerHTML = "N/A";
                }else{
                    document.getElementById('Result1').innerHTML = "Alarm";
                }
                if(BoolRefL[n-1]=="false"){
                    document.getElementById('Result2').innerHTML = "N/A";
                }else{
                    document.getElementById('Result2').innerHTML = "Alarm";
                }
                if(BoolRefL[n-2]=="false"){
                    document.getElementById('Result3').innerHTML = "N/A";
                }else{
                    document.getElementById('Result3').innerHTML = "Alarm";
                }
                if(BoolRefL[n-3]=="false"){
                    document.getElementById('Result4').innerHTML = "N/A";
                }else{
                    document.getElementById('Result4').innerHTML = "Alarm";
                }
                if(BoolRefL[n-4]=="false"){
                    document.getElementById('Result5').innerHTML = "N/A";
                }else{
                    document.getElementById('Result5').innerHTML = "Alarm";
                }
            });
             if(TimeL.length>c+1) c++;
        }else if(c==5){
            n=c;
            TimeRef= firebase.database().ref('Device_ID/Event/E_Time');
            TimeRef.on('value', (snapshot) => {
                t = snapshot.val();
                for(var i = 0;i < c+1;i++){if(TimeL.indexOf(t) == -1)TimeL.push(t);}
                  
                document.getElementById('Time1').innerHTML = TimeL[n];
                document.getElementById('Time2').innerHTML = TimeL[n-1];
                document.getElementById('Time3').innerHTML = TimeL[n-2];
                document.getElementById('Time4').innerHTML = TimeL[n-3];
                document.getElementById('Time5').innerHTML = TimeL[n-4];
                document.getElementById('Time6').innerHTML = TimeL[n-5];
            });
console.log(TimeL);
            TypeRef= firebase.database().ref('Device_ID/Event/type');
            TypeRef.on('value', (snapshot) => {
                type = snapshot.val();
                TypeL.push(type);
if(TypeL.length-c>0){
    for(i=0;i < TypeL.length-c-1;i++){
        TypeL.pop();
    }}
console.log(TypeL);

                document.getElementById('Type1').innerHTML = TypeL[n] + " Detected";
                document.getElementById('Type2').innerHTML = TypeL[n-1] + " Detected";
                document.getElementById('Type3').innerHTML = TypeL[n-2] + " Detected";
                document.getElementById('Type4').innerHTML = TypeL[n-3] + " Detected";
                document.getElementById('Type5').innerHTML = TypeL[n-4] + " Detected";
                document.getElementById('Type6').innerHTML = TypeL[n-5] + " Detected";
            });
                BoolRef= firebase.database().ref('Device_ID/Event/bool');
                BoolRef.on('value', (snapshot) => {
                    b = snapshot.val();
                    BoolRefL.push(b);
if(BoolRefL.length-c>0){
    for(i=0;i < BoolRefL.length-c-1;i++){
        BoolRefL.pop();
    }}
console.log(BoolRefL);
                if(BoolRefL[n]=="false"){
                    document.getElementById('Result1').innerHTML = "N/A";
                }else{
                    document.getElementById('Result1').innerHTML = "Alarm";
                }
                if(BoolRefL[n-1]=="false"){
                    document.getElementById('Result2').innerHTML = "N/A";
                }else{
                    document.getElementById('Result2').innerHTML = "Alarm";
                }
                if(BoolRefL[n-2]=="false"){
                    document.getElementById('Result3').innerHTML = "N/A";
                }else{
                    document.getElementById('Result3').innerHTML = "Alarm";
                }
                if(BoolRefL[n-3]=="false"){
                    document.getElementById('Result4').innerHTML = "N/A";
                }else{
                    document.getElementById('Result4').innerHTML = "Alarm";
                }
                if(BoolRefL[n-4]=="false"){
                    document.getElementById('Result5').innerHTML = "N/A";
                }else{
                    document.getElementById('Result5').innerHTML = "Alarm";
                }
                if(BoolRefL[n-5]=="false"){
                    document.getElementById('Result6').innerHTML = "N/A";
                }else{
                    document.getElementById('Result6').innerHTML = "Alarm";
                }
            });
             if(TimeL.length>c+1) c++;
        }else if(c==6){
            n=c;
            TimeRef= firebase.database().ref('Device_ID/Event/E_Time');
            TimeRef.on('value', (snapshot) => {
                t = snapshot.val();
                for(var i = 0;i < c+1;i++){if(TimeL.indexOf(t) == -1)TimeL.push(t);}
                document.getElementById('Time1').innerHTML = TimeL[n];
                document.getElementById('Time2').innerHTML = TimeL[n-1];
                document.getElementById('Time3').innerHTML = TimeL[n-2];
                document.getElementById('Time4').innerHTML = TimeL[n-3];
                document.getElementById('Time5').innerHTML = TimeL[n-4];
                document.getElementById('Time6').innerHTML = TimeL[n-5];
                document.getElementById('Time7').innerHTML = TimeL[n-6];
            });
console.log(TimeL);
            TypeRef= firebase.database().ref('Device_ID/Event/type');
            TypeRef.on('value', (snapshot) => {
                type = snapshot.val();
                TypeL.push(type);
if(TypeL.length-c>0){
    for(i=0;i < TypeL.length-c-1;i++){
        TypeL.pop();
    }}
console.log(TypeL);

                document.getElementById('Type1').innerHTML = TypeL[n] + " Detected";
                document.getElementById('Type2').innerHTML = TypeL[n-1] + " Detected";
                document.getElementById('Type3').innerHTML = TypeL[n-2] + " Detected";
                document.getElementById('Type4').innerHTML = TypeL[n-3] + " Detected";
                document.getElementById('Type5').innerHTML = TypeL[n-4] + " Detected";
                document.getElementById('Type6').innerHTML = TypeL[n-5] + " Detected";
                document.getElementById('Type7').innerHTML = TypeL[n-6] + " Detected";
            });
                BoolRef= firebase.database().ref('Device_ID/Event/bool');
                BoolRef.on('value', (snapshot) => {
                    b = snapshot.val();
                    BoolRefL.push(b);
if(BoolRefL.length-c>0){
    for(i=0;i < BoolRefL.length-c-1;i++){
        BoolRefL.pop();
    }}
console.log(BoolRefL);
                if(BoolRefL[n]=="false"){
                    document.getElementById('Result1').innerHTML = "N/A";
                }else{
                    document.getElementById('Result1').innerHTML = "Alarm";
                }
                if(BoolRefL[n-1]=="false"){
                    document.getElementById('Result2').innerHTML = "N/A";
                }else{
                    document.getElementById('Result2').innerHTML = "Alarm";
                }
                if(BoolRefL[n-2]=="false"){
                    document.getElementById('Result3').innerHTML = "N/A";
                }else{
                    document.getElementById('Result3').innerHTML = "Alarm";
                }
                if(BoolRefL[n-3]=="false"){
                    document.getElementById('Result4').innerHTML = "N/A";
                }else{
                    document.getElementById('Result4').innerHTML = "Alarm";
                }
                if(BoolRefL[n-4]=="false"){
                    document.getElementById('Result5').innerHTML = "N/A";
                }else{
                    document.getElementById('Result5').innerHTML = "Alarm";
                }
                if(BoolRefL[n-5]=="false"){
                    document.getElementById('Result6').innerHTML = "N/A";
                }else{
                    document.getElementById('Result6').innerHTML = "Alarm";
                }
                if(BoolRefL[n-6]=="false"){
                    document.getElementById('Result7').innerHTML = "N/A";
                }else{
                    document.getElementById('Result7').innerHTML = "Alarm";
                }
            });
             if(TimeL.length>c+1) c++;
        }else if(c==7){
            n=c;
            TimeRef= firebase.database().ref('Device_ID/Event/E_Time');
            TimeRef.on('value', (snapshot) => {
                t = snapshot.val();
                for(var i = 0;i < c+1;i++){if(TimeL.indexOf(t) == -1)TimeL.push(t);}
                  
                document.getElementById('Time1').innerHTML = TimeL[n];
                document.getElementById('Time2').innerHTML = TimeL[n-1];
                document.getElementById('Time3').innerHTML = TimeL[n-2];
                document.getElementById('Time4').innerHTML = TimeL[n-3];
                document.getElementById('Time5').innerHTML = TimeL[n-4];
                document.getElementById('Time6').innerHTML = TimeL[n-5];
                document.getElementById('Time7').innerHTML = TimeL[n-6];
                document.getElementById('Time8').innerHTML = TimeL[n-7];
            });
console.log(TimeL);
            TypeRef= firebase.database().ref('Device_ID/Event/type');
            TypeRef.on('value', (snapshot) => {
                type = snapshot.val();
                TypeL.push(type);
if(TypeL.length-c>0){
    for(i=0;i < TypeL.length-c-1;i++){
        TypeL.pop();
    }}
console.log(TypeL);

                document.getElementById('Type1').innerHTML = TypeL[n] + " Detected";
                document.getElementById('Type2').innerHTML = TypeL[n-1] + " Detected";
                document.getElementById('Type3').innerHTML = TypeL[n-2] + " Detected";
                document.getElementById('Type4').innerHTML = TypeL[n-3] + " Detected";
                document.getElementById('Type5').innerHTML = TypeL[n-4] + " Detected";
                document.getElementById('Type6').innerHTML = TypeL[n-5] + " Detected";
                document.getElementById('Type7').innerHTML = TypeL[n-6] + " Detected";
                document.getElementById('Type8').innerHTML = TypeL[n-7] + " Detected";
            });
                BoolRef= firebase.database().ref('Device_ID/Event/bool');
                BoolRef.on('value', (snapshot) => {
                    b = snapshot.val();
                    BoolRefL.push(b);
if(BoolRefL.length-c>0){
    for(i=0;i < BoolRefL.length-c-1;i++){
        BoolRefL.pop();
    }}
console.log(BoolRefL);
                if(BoolRefL[n]=="false"){
                    document.getElementById('Result1').innerHTML = "N/A";
                }else{
                    document.getElementById('Result1').innerHTML = "Alarm";
                }
                if(BoolRefL[n-1]=="false"){
                    document.getElementById('Result2').innerHTML = "N/A";
                }else{
                    document.getElementById('Result2').innerHTML = "Alarm";
                }
                if(BoolRefL[n-2]=="false"){
                    document.getElementById('Result3').innerHTML = "N/A";
                }else{
                    document.getElementById('Result3').innerHTML = "Alarm";
                }
                if(BoolRefL[n-3]=="false"){
                    document.getElementById('Result4').innerHTML = "N/A";
                }else{
                    document.getElementById('Result4').innerHTML = "Alarm";
                }
                if(BoolRefL[n-4]=="false"){
                    document.getElementById('Result5').innerHTML = "N/A";
                }else{
                    document.getElementById('Result5').innerHTML = "Alarm";
                }
                if(BoolRefL[n-5]=="false"){
                    document.getElementById('Result6').innerHTML = "N/A";
                }else{
                    document.getElementById('Result6').innerHTML = "Alarm";
                }
                if(BoolRefL[n-6]=="false"){
                    document.getElementById('Result7').innerHTML = "N/A";
                }else{
                    document.getElementById('Result7').innerHTML = "Alarm";
                }
                if(BoolRefL[n-7]=="false"){
                    document.getElementById('Result8').innerHTML = "N/A";
                }else{
                    document.getElementById('Result8').innerHTML = "Alarm";
                }
            });
             if(TimeL.length>c+1) c++;
        }else{
            n=7;
            TimeRef= firebase.database().ref('Device_ID/Event/E_Time');
            TimeRef.on('value', (snapshot) => {
                t = snapshot.val();
                for(var i = 0;i < c+1;i++){if(TimeL.indexOf(t) == -1)TimeL.push(t);}
                 
                if(TimeL.length>=c){
                    for(i=0;i<TimeL.length-c;i++){
                        TimeL.shift();
                    }
                }
                document.getElementById('Time1').innerHTML = TimeL[n];
                document.getElementById('Time2').innerHTML = TimeL[n-1];
                document.getElementById('Time3').innerHTML = TimeL[n-2];
                document.getElementById('Time4').innerHTML = TimeL[n-3];
                document.getElementById('Time5').innerHTML = TimeL[n-4];
                document.getElementById('Time6').innerHTML = TimeL[n-5];
                document.getElementById('Time7').innerHTML = TimeL[n-6];
                document.getElementById('Time8').innerHTML = TimeL[n-7];
            });
console.log(TimeL);
            TypeRef= firebase.database().ref('Device_ID/Event/type');
            TypeRef.on('value', (snapshot) => {
                type = snapshot.val();
                TypeL.push(type);
                if(TypeL.length-c>0){
                    for(i=0;i < TypeL.length-c-1;i++){
                        TypeL.pop();
                    }
                }
                
                if(TypeL.length>=c){
                    for(i=0;i<TypeL.length-c;i++){
                        TypeL.shift();
                    }
                }
                console.log(TypeL);

                document.getElementById('Type1').innerHTML = TypeL[n] + " Detected";
                document.getElementById('Type2').innerHTML = TypeL[n-1] + " Detected";
                document.getElementById('Type3').innerHTML = TypeL[n-2] + " Detected";
                document.getElementById('Type4').innerHTML = TypeL[n-3] + " Detected";
                document.getElementById('Type5').innerHTML = TypeL[n-4] + " Detected";
                document.getElementById('Type6').innerHTML = TypeL[n-5] + " Detected";
                document.getElementById('Type7').innerHTML = TypeL[n-6] + " Detected";
                document.getElementById('Type8').innerHTML = TypeL[n-7] + " Detected";
            });
                BoolRef= firebase.database().ref('Device_ID/Event/bool');
                BoolRef.on('value', (snapshot) => {
                    b = snapshot.val();
                    BoolRefL.push(b);
                    if(BoolRefL.length>=c){
                        for(i=0;i<BoolRefL.length-c;i++){
                            BoolRefL.shift();
                        }
                    }
                if(BoolRefL[n]=="false"){
                    document.getElementById('Result1').innerHTML = "N/A";
                }else{
                    document.getElementById('Result1').innerHTML = "Alarm";
                }
                if(BoolRefL[n-1]=="false"){
                    document.getElementById('Result2').innerHTML = "N/A";
                }else{
                    document.getElementById('Result2').innerHTML = "Alarm";
                }
                if(BoolRefL[n-2]=="false"){
                    document.getElementById('Result3').innerHTML = "N/A";
                }else{
                    document.getElementById('Result3').innerHTML = "Alarm";
                }
                if(BoolRefL[n-3]=="false"){
                    document.getElementById('Result4').innerHTML = "N/A";
                }else{
                    document.getElementById('Result4').innerHTML = "Alarm";
                }
                if(BoolRefL[n-4]=="false"){
                    document.getElementById('Result5').innerHTML = "N/A";
                }else{
                    document.getElementById('Result5').innerHTML = "Alarm";
                }
                if(BoolRefL[n-5]=="false"){
                    document.getElementById('Result6').innerHTML = "N/A";
                }else{
                    document.getElementById('Result6').innerHTML = "Alarm";
                }
                if(BoolRefL[n-6]=="false"){
                    document.getElementById('Result7').innerHTML = "N/A";
                }else{
                    document.getElementById('Result7').innerHTML = "Alarm";
                }
                if(BoolRefL[n-7]=="false"){
                    document.getElementById('Result8').innerHTML = "N/A";
                }else{
                    document.getElementById('Result8').innerHTML = "Alarm";
                }
            });
            c=8;
        }
    }