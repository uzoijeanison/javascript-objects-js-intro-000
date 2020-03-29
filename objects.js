function updatePlaylist (obj, artistName, songTitle) {
  return Object.assign({}, obj, { [artistName]: songTitle })
}
 const playlist = {}

 updatePlaylist(playlist, artistName, songTitle)
