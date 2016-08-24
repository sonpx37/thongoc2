# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

@homePage = 
  init: ->
    @initializeMap()

  initializeMap: ->
    google.maps.event.addDomListener window, 'load', @showMap

  showMap: ->
    myCenter = new (google.maps.LatLng)(51.508742, -0.120850)
    mapProp = 
      center: myCenter
      zoom: 5
      mapTypeId: google.maps.MapTypeId.ROADMAP
    map = new (google.maps.Map)(document.getElementById('googleMap'), mapProp)
    marker = new (google.maps.Marker)(position: myCenter)
    marker.setMap map

$ ->
  homePage.init()