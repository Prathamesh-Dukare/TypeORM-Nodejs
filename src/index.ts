import { AppDataSource } from "./data-source";
import { Project } from "./entity/Project";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Sai";
    // user.lastName = "Dhandapani";
    // user.age = 10;
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);

    // console.log("now creating a project");
    // const project = new Project();
    // project.project_name = "peerlist";
    // project.project_description = "peerlist is a peer to peer network";
    // project.likes = 101;
    // await AppDataSource.manager.save(project);
    // console.log("Saved a new project with id: " + project.id);

    console.log("Loading projects from the database...");
    const projects = await AppDataSource.manager.find(Project);
    console.log("Loaded projects: ", projects);
  })
  .catch((error) => console.log(error));
