<?php

namespace App\Http\Apis;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use App\Http\Services\ExecRakutenApiRankingService;
use App\Http\Services\ExecRakutenApiGenreService;

/**
 * 楽天APIの受け口
 */
class RakutenApi
{

    /**
     * 楽天ランキングAPI処理を呼び出し
     *
     * @param Request $req - リクエストパラメータ
     * @param ExecRakutenApiRankingService $service - 処理サービスクラス
     * @return array
     */
    public function callIchibaItemRanking(Request $req, ExecRakutenApiRankingService $service) {
        $datas = $service->execApi($req);
        return $datas;
    }

    /**
     * 楽天ジャンル検索API処理を呼び出し
     *
     * @param Request $req - リクエストパラメータ
     * @param ExecRakutenApiGenreService $service - 処理サービスクラス
     * @return array
     */
    public function callIchibaGenre(Request $req, ExecRakutenApiGenreService $service) {
        $datas = $service->execApi($req);
        return $datas;
    }
}