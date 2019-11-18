<?php
namespace OpenAPIServer\Api;

use OpenAPIServer\Model\Insight;
use OpenAPIServer\PsrHelper;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class InsightsApi extends AbstractInsightsApi
{
    public function getInsights(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $insights = [];
        return PsrHelper::withJson($response, $insights);
    }

    public function getInsight(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $insight = new Insight();

        return PsrHelper::withJson($response, $insight);
    }

    public function createInsight(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $insight = new Insight();

        return PsrHelper::withJson($response, $insight);
    }

    public function deleteInsight(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        return PsrHelper::withJson($response, ['success'=>true]);
    }

    public function updateInsight(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $insight = new Insight();

        return PsrHelper::withJson($response, $insight);
    }
}