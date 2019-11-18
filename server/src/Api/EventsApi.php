<?php
namespace OpenAPIServer\Api;

use OpenAPIServer\Model\Event;
use OpenAPIServer\PsrHelper;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class EventsApi extends AbstractEventsApi
{
    public function getEvents(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $events = [];
        return PsrHelper::withJson($response, $events);
    }

    public function getEvent(ServerRequestInterface $request, ResponseInterface $response, array $args)
    {
        $event = new Event();

        return PsrHelper::withJson($response, $event);
    }
}