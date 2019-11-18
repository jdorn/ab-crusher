<?php

namespace OpenAPIServer;

use Psr\Http\Message\ResponseInterface;

class PsrHelper {
    static function withJson(ResponseInterface $response, $data, int $status=200): ResponseInterface
    {
        $json = json_encode($data);
        if(!$json) {
            throw new \Exception(json_last_error_msg());
        }

        $response = $response->withHeader('Content-Type','application/json');
        $response->getBody()->write($json);

        return $response->withStatus($status);
    }
}