/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 
 */
 var fichero;
 function ObtenerFoto(){
 navigator.camera.getPicture(correcto, error,(quality:100,allowEdit));
 }
Function correcto(rutaImagen){
document.getElementById("imgCamara").src=rutaImagen;
fichero=rutaImagen;
}	
function error(message){
alert("error=>"+message);
}
 function enviarDatos() {
	 var options = new fileUploadOptions(){
	 options.fileKey="file";
	 options.fileName=fichero.subatr(fichero.lastIndex('/')+1);
	 options.mimeTypes="image/jpeg";
	 options.chunkedMode= true;
	 var params = new Object();
	 params.description= document.getElementById("descripcion").value;
	
	options.params = params;
	var  ft = new FileTransfer();
	var  percentageUpload=0;
	ft.upload(fichero,"http://192.168.0.28:3000/",win,fail,options);
	 
	 
	 
	 
	 
	 var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

 
 
