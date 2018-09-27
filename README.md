This is MM challenge 2

Content:
 - app.js : this file content API REST of this challenge.
 - package.json : this file content information to execute app.js application in container docker 
 - Dockerfile: this file content instructions to create image used for this challenge.
 - Doc API REST Challenge 2.pdf: this file content documentation API REST.
 - deployment.yml : this file content Deployment and Services Kubernetes instructions to dev and prod environments using image docker before build 
 - ingress.yml : this file content Deployment and Services ingress controller using nginx controller. 
				PD: Content a external ip, you should change this ip for a expose ip internet of your organization for you probe on internet.
 - ingress-rules.yml : this file content instructions to set up redirect request on nginx-controller to separate dev and prod environments.
 