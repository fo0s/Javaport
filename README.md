# Javaport

This is the javascript version of the Makers Academy airport challenge.
This is also the beginning of my journey with javascript, as frustrating as that is.

## To run

`Put html base code here`

`Put javascript source here`

### User stories

> As an air traffic controller
>
> So I can get passengers to a destination
>
> I want to instruct a plane to land at an airport

Started with creating a plane. As I know the importance of it's state will be important later on, I implimented this straight away.
Next Started work on the airport. We need to able to store a plane somewhere... hangers with an empty state. There's no planes in there yet. Obvs.

Airport (being the magical being it is) asks a lonely plane to join them. It complies.

> As an air traffic controller
>
> So I can get passengers on the way to their destination
>
> I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

Airport has an array which stores planes. Now has the ability to have one of the planes removed.

> As an air traffic controller
>
> To ensure safety
>
> I want to prevent takeoff when weather is stormy

A nice and simple implimplimentation to check weather conditions. Those planes arn't going anywhere.

> As an air traffic controller
>
> To ensure safety
>
> I want to prevent landing when weather is stormy

Totally ignoring health and safety, planes now can't land either when weather conditions are bad.

> As an air traffic controller
>
> To ensure safety
>
>I want to prevent landing when the airport is full
