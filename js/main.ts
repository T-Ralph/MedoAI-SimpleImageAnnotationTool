function annotationReset() {
  anno.removeAll();
  anno.destroy();
  anno.reset();
}

function annotationNote(note) {
  $(".annotorious-editor-text").val(note);
}

function generateUniqueID() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function annotationJSON() {
  let annos = anno.getAnnotations();
  let Annotation = Array();
  for (let index = 0; index < annos.length; index++) {
    let upperLeft = {
      pointID: generateUniqueID(),
      x: annos[index].shapes[0].geometry.x,
      y: annos[index].shapes[0].geometry.y
    }
    let lowerRight = {
      pointID: generateUniqueID(),
      x: annos[index].shapes[0].geometry.x + annos[index].shapes[0].geometry.height,
      y: annos[index].shapes[0].geometry.y + annos[index].shapes[0].geometry.width
    }
    Annotation[index] = {
      annotationID: generateUniqueID(),
      upperLeft: upperLeft,
      lowerRight: lowerRight,
      type: annos[index].text
    }
  }
  let DesiredOutputFormat = {
    imageName: 'image.jpg',
    annotations: Annotation
  }
  console.log(DesiredOutputFormat);
  $("#JSONOutput").val(JSON.stringify(DesiredOutputFormat));
}
