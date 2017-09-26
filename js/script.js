var apiUrl = "https://youtube-video-api-1608.appspot.com/youtube/api";
var videoId, name, description, keywords, genre, category, lstCategory, videoBOD;
var video = {
    videoId: videoId,
    name: name,
    description: description,
    keywords: keywords,
    category: lstCategory,
    genre: genre,
    authorName: "lamtv",
    authorEmail: "lamtvd00516@fpt.edu.vn",
    birthday: videoBOD
};

function loading() {
    document.getElementById('cssload-loader').style.display = "block";
}

function loadingSuccess() {
    document.getElementById('cssload-loader').style.display = "none";
}

function loadVideo() {
    loading();
    console.log('called function');
    var page, limit;
    page = 1;
    limit = 0;
    var main = document.getElementById('video-list');
    var divVContainer, divThumbnail, imgElm, divCaption, h3;
    // main.innerHTML += "";
    // console.log(main);
    var html = "";
    $.ajax({
        url: apiUrl, // + '?page=' + page + '&limit=' + limit,
        type: 'GET',
        success: function(rsData, status) {
            loadingSuccess();
            // tính tổng số trang, mỗi trang hiển thị một lượng = limit video vd: 21 / 8 => 3 trang(cần làm tròn)
            for (var i = rsData.length - 1; i >= 0; i--) {
                // console.log(rsData[i].videoId);
                // html += '<img alt="Preview image" data-holder-rendered="true" src="https://i.ytimg.com/vi/' + rsData[i].videoId + '/hqdefault.jpg" style="height: 200px; width: 100%; display: block;"/>';
                // html += rsData[i].name;
                html += '<div class="col-sm-6 col-md-4">';
                html += '   <div class="thumbnail no-border">';
                html += '       <img alt="Preview image" data-holder-rendered="true" src="https://i.ytimg.com/vi/' + rsData[i].videoId + '/hqdefault.jpg" style="height: 200px; width: 100%; display: block;"/>';
                html += '       <div class="thumbnail-btn-play"></div>'
                html += '       <div class="caption">';
                html += '           <span>';
                html +=             rsData[i].name;
                 html += '           </span>';
                html += '       </div>';
                html += '   </div>';
                html += '</div>';
            }
            $('#video-list').append(html);
        },
        error: function() {
            // alert('Failed!');
            console.log('Get data Failed!!!!!');
        }
    });
}

function addVideo() {}

function deleteVideo() {}

function updateVideo() {}