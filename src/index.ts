import { AppDataSource } from "./data-source";
import { Project } from "./entity/Project";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const user = new User();
    user.firstName = "Special";
    user.lastName = "User";
    user.age = 100;
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await AppDataSource.manager.find(User);
    // console.log("Loaded users: ", users);

    const project = new Project();
    project.project_name = "slick";
    project.project_description = "slick is a database library for scala";
    project.likes = 106;

    user.project = project; // note that we don't have to set project.user

    // get user repository
    const userRepository = AppDataSource.getRepository(User);
    await userRepository.save(user);

    console.log("Saved a new user with id: " + user.id);

    // await AppDataSource.manager.save(project);
    // console.log("Saved a new project with id: " + project.id);

    // console.log("Loading projects from the database...");
    // const projects = await AppDataSource.manager.find(Project);
    // console.log("Loaded projects: ", projects);
  })
  .catch((error) => console.log(error));
