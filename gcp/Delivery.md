# Good

- very quick start with first quick success to deploy a function
- function is per default a tagged docker container -> pull and start local or do int test stuff
- it seems functions can added to vpc without problem

# Bad

- good ideas, but why not bring the stuff to the end
  - per default there is a container with an version tag -> why it is not possible to deploy the same version without rebuild to another stage or project/environment?
  - not switch to older version, but image is there
  - no way to deploy a function combination
  - We found no way to combine multiple cloud build yamls to a meta file.
