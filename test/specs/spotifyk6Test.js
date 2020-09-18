import http from 'k6/http';

export default function () {
    const AUTH_SPOTIFY_TOKEN = "BQCyNOR1yvBxrE1PaQ6KaiBxEXxSd-flJH1DBUhoYfdX9PRSmJmDf_Z8SQhu3jL0Wpr-pQT3v-QdWujq_Vn4EzjBitb-J8jSLiW1atmEdh_h_IEQs4e_Sgi-EONUbXKMHXUvdFQwg6vmG2rk3dzbSdffxv-KwN3Ti7Rqyho50n_EAlKFVz_PHRgLMMNC_GDtbAgzU1-QRhbY_zMCh_gv3af7aHy54TQNIYdj27_flRfPZprDS5luEta9mWQqghapsf1U6DcRpDk2yAxm"
    const SWEET_CHILD_ID = "7o2CTH4ctstm8TNelqjb51"
    const TRACKS_PATH = '/tracks'
    const URL ="https://api.spotify.com/v1"+TRACKS_PATH+SWEET_CHILD_ID

    var params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'BEARER '+AUTH_SPOTIFY_TOKEN
        },
    };

    let response=http.get(URL,params);
}