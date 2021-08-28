<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\Log;
use GuzzleHttp\Client;

/**
 * 楽天API総合ランキングの処理クラス
 */
class ExecRakutenApiRankingService
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
        $method = "GET";

        // API呼び出し
        $client = new Client();
        $response = $client->request($method, $url);

        // 結果を加工
        $posts = $response->getBody();
        $posts = json_decode($posts, true);
        return $posts;
    }
}