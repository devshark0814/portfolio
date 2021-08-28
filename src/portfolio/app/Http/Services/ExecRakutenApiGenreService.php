<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\Log;
use GuzzleHttp\Client;

/**
 * 楽天APIジャンル検索の処理クラス
 */
class ExecRakutenApiGenreService
{

    /**
     * APIを呼び出し
     *
     * @param mixed $reqParam 
     * @return array
     */
    public function execApi($reqParam) {
        // APIの呼び出し準備
        $url = $reqParam->url;
        $genreId = $reqParam->genreId;
        $url .= "&genreId=".$genreId;
        $method = "GET";

        // API呼び出し
        $client = new Client();
        $response = $client->request($method, $url);

        // 結果を加工
        $posts = $response->getBody();
        $posts = json_decode($posts, true);
        $children = $posts['children'];
        return collect($children)->pluck('child')->toArray();
    }
}