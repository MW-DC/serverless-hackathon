
# Short wrap up

## Good

- very quick start with first quick success to deploy a function
- no infrastructure is necessary for an app wrapper before you can deploy an function inside like on azure 
- function is per default a tagged docker container. you call pull and start it local or do int test stuff
- it seems functions can added to a vpc without public endpoint very easily

## Bad

- good ideas, but why not bring the stuff to the end, e. g. per default there is a container with an version tag -> why it is not possible to deploy the same version without rebuild to another stage or project/environment? no easy way to resuse a build
- not switch to older version within the cloudfunction portal or cli, but image is there per default
- no way to deploy a function in combination with other functions. You have to tag your branch(es) and rebuild on new projects. But you cannot define a set of specific versions that belongs together
- We found no way to combine multiple cloud build yamls to a meta file, but that is more about cloudbuild not cloud functions

## first summary: 

Our first impression is that cloud functions, like on other cloud provider functions, are more suitable for small isolated tasks, but not for a larger combound or a fine-grained application that consist of more than 100 functions. Services such as "google cloud run" are intended for these projects, which provide the same experience of serverless computing but based on kubernetes as a fully managed serverless cloud service. serverles is not lambda or functions, it is cloud experience without having to worry about the operation of servers.