<?php
namespace OpenAPIServer\Api;

use OpenAPIServer\Model\Snapshot;
use OpenAPIServer\Model\Test;
use OpenAPIServer\PsrHelper;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class TestsApi extends AbstractTestsApi
{
    public function getTests(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $tests = [];
        return PsrHelper::withJson($response, $tests);
    }

    public function getTest(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $test = new Test();

        return PsrHelper::withJson($response, $test);
    }

    public function getSnapshots(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $snapshot = new Snapshot();

        return PsrHelper::withJson($response, $snapshot);
    }

    public function uploadScreenshot(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $screenshot = [
            'path'=>'/'
        ];
        return PsrHelper::withJson($response, $screenshot);
    }

    public function createSnapshot(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $snapshot = new Snapshot();

        return PsrHelper::withJson($response, $snapshot);
    }

    public function createTest(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $test = new Test();

        return PsrHelper::withJson($response, $test);
    }

    public function deleteTest(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        return PsrHelper::withJson($response, ['success'=>true]);
    }

    public function updateTest(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $test = new Test();

        return PsrHelper::withJson($response, $test);
    }
}