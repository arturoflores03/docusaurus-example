---
sidebar_position: 2
---

# Ciclo de Vida

<aside>
💡 Esta página documenta los pasos y la forma en la que el equipo de Flujo de Ventas implementa nuevos desarrollos al ambiente productivo.

</aside>

# 1. Pasos a producción

Existen 3 casuísticas que llegarían a producción y que estarán como etiquetas en las historias de Jira. Por ejemplo 

![ejemplo](/img/ciclovida1.png)

- **Acuerdos para un paso programado**
    - Es requisito que todo nuevo desarrollo deba nacer, o haber nacido, desde la rama de `develop`.
    - Si el nuevo desarrollo lleva mucho tiempo en la columna *****Ready***** en Jira, es requisito que la o el desarrollador responsable actualice su rama con `develop` mediante un ¿merge/rebase?.
    - Los pasos programados son planificados con su debida anticipación los días jueves o viernes de cada semana. Y se anuncian al equipo, por el chat de ***FDV 2***, las tareas que deben pasar, la fecha del paso y su respectivo responsable.
    
    ![ejemplo](/img/ciclovida2.png)
    
    - Es requisito tener la aprobación de QA en los ambientes de desarrollo y certificación **un día antes** del paso a producción.
    - Cada tarea con un paso asignado deberá reunirse en una rama temporal para dar inicio a su camino a producción. Este hito es el que da inicio al paso a producción y el que cambia el [estado de READY a UAT en Jira](https://www.notion.so/Estructura-del-Equipo-7e4ce818f58244d096d701039b0bf5a8?pvs=21).
- **PasoExpress**
    - No puede mezclarse con las tareas en curso
    - Son una tarea aislada
    - Tiene su propia rama
- **Hotfix**
    - Es una tarea aislada
    - Tiene su propia rama
    - Quien tome este tipo de tareas, debe actualizar / develop con los cambios que se pasaron

# 2. Estrategia de branching

[2. Estrategia de Branching](https://www.notion.so/2-Estrategia-de-Branching-868a41f9eaa3467fbb76fef20e982dc6?pvs=21)

# 3. Checklist paso a producción

<aside>
💡 Cada paso de producción, ya sea programado o express, será anunciado la semana anterior a todo el equipo. Y en este anuncio **se asignará a un DEV y una PO responsable** para ejecutar y hacer seguimiento a dicho paso.

</aside>

<aside>
👀 Cabe recordar que los despliegues se realizan sobre la infraestructura de Clínica Alemana, por lo que es muy importante tener contexto de sus directrices que puedes revisar aquí 👉 [Arquitectura y CI/CD de Clínica Alemana](https://www.notion.so/Directrices-de-desarrollo-d9ff5ccc1b3b4bccadf531c408d77ab6?pvs=21)

</aside>

## Etapa 1 - Paso a DESARROLLO

- [ ]  Generar una nueva rama temporal, desde `develop`, con el nombre de `preprod/scheduled-{YYYYMMDD}` para un paso programado y `preprod/express-{YYYYMMDD}` para un paso express. Procura que la fecha a utilizar es la fecha correspondiente al día en el que se realizará dicho paso.
- [ ]  ***Code Review:*** Cada rama `feature/` con la tarea que debe incluirse en este paso, debe generar un MR a la rama temporal `preprod/{tag}-{YYYYMMDD}` y asignar a un revisor quien debe 1) revisar el código y 2) hacer una prueba funcional de la tarea dejando evidencia en Gitlab al momento de aprobar el MR. Recordar que cada rama `feature/` debe venir ya actualizada con `develop`. Revisa aquí el [checklist para el Code Review](https://www.notion.so/Directrices-de-desarrollo-d9ff5ccc1b3b4bccadf531c408d77ab6?pvs=21).
- [ ]  Si la rama temporal `preprod/{tag}-{YYYYMMDD}` ya estaba creada, verificar que esté actualizada con `develop`.
- [ ]  Hacer push a GitLab de la rama `preprod/{tag}-{YYYYMMDD}`. ~~Al tener el prefijo `preprod/` esta rama se despliega automáticamente en el ambiente de `develop`~~. Sólo las ramas con el prefijo “hotfix” son desplegadas automáticamente en el ambiente de desarrollo de Jenkins. Por lo tanto es importante consultar previamente si este ambiente se está utilizando o no para otros fines.
- [ ]  Verificar correcto despliegue en [Jenkins DEV](https://jenmdev.alemana.cl/blue/organizations/jenkins/heidelberg%2FNPCASEMP-APPVENTA-NODE/activity). Asegurarse que en los deploy del migraciones, backend y frontend pasen sin errores (evitar falsos positivos) y realizar pruebas QA.

## Etapa 2 - Paso a CERTIFICACIÓN

- [ ]  Hacer MR desde `preprod/{tag}-{YYYYMMDD}` hacia `develop`. Activar en este MR los checkboxs de *“Delete source branch when merge request is accepted.”* para borrar la rama temporal `preprod/` y la de *“Squash commits when merge request is accepted.”* para dejar todos los comentarios aunados en uno solo.
- [ ]  Verificar correcto despliegue en [Jenkins DEV](https://jenmdev.alemana.cl/blue/organizations/jenkins/heidelberg%2FNPCASEMP-APPVENTA-NODE/activity). Asegurarse que en los deploy del migraciones, backend y frontend pasen sin errores (evitar falsos positivos).
- [ ]  Hacer MR desde `develop` hacia `master` (NO HACER SQUASH)y notificar a David Acosta para aprobación por el *[**Canal de Ventas**](https://teams.microsoft.com/l/channel/19%3a281bc58cbfcc4110b5a3ed76ef9b3922%40thread.tacv2/Ventas?groupId=ece3a38d-12db-4375-9c09-9c41c1828e25&tenantId=a670b10b-5b0a-4cf1-b50b-2724e4e709dc)* en el Teams de Esencial:
    
    Ejemplo del mensaje indicando que es para certificación, sumando enlace a GitLab:
    
    > *Hola @David Andrés Acosta Miranda, te dejo un MR para el ambiente de certificación (master). http://gitlab.alemana.cl/CC/npcasemp/npcasemp-appventa-node/-/merge_requests/775
    ¡Gracias!*
    > 
- [ ]  Una vez aprobado el MR por David, verificar el correcto despliegue en [Jenkins CERT](https://jenmprod.alemana.cl/blue/organizations/jenkins/certificacion%2Fheidelberg%2FNPCASEMP-APPVENTA-NODE/activity/). Asegurarse que en los deploy del migraciones, backend y frontend pasen sin errores (evitar falsos positivos).
- [ ]  Realizar pruebas de QA, solo de regresión.

## Etapa 3 - Paso a PRODUCCIÓN

- [ ]  Hacer MR de `master` hacia `release/delivery` y notificar a David Acosta para aprobación por el ***[Canal de Ventas](https://teams.microsoft.com/l/channel/19%3a281bc58cbfcc4110b5a3ed76ef9b3922%40thread.tacv2/Ventas?groupId=ece3a38d-12db-4375-9c09-9c41c1828e25&tenantId=a670b10b-5b0a-4cf1-b50b-2724e4e709dc)*** en el Teams de Esencial:
    
    Ejemplo de mensaje indicando que es para producción, la fecha del paso agendado, sumando enlace a GitLab y TAG del paso anterior:
    
    > *Hola @David Andrés Acosta Miranda, te dejo el MR para el paso a producción agendado para el 07-06-2023 a las 16:00 hrs http://gitlab.alemana.cl/CC/npcasemp/npcasemp-appventa-node/-/merge_requests/780.
    Además dejo el TAG correspondiente al paso anterior [PAP_20230516](http://gitlab.alemana.cl/CC/npcasemp/npcasemp-appventa-node/-/tags/PAP_20230516).
    ¡Gracias!
    Cc: @Alberto Rocco @Yvanna Olivares @Katherine Berríos @Arturo Salinas @Israel Escaida @Felipe Huerta*
    > 
- [ ]  Una vez aprobado el MR por David, verificar el correcto despliegue en [Jenkins PROD](https://jenmprod.alemana.cl/blue/organizations/jenkins/produccion%2Fheidelberg%2FNPCASEMP-APPVENTA-NODE/activity). Asegurarse que en los deploy del migraciones, backend y frontend pasen sin errores (evitar falsos positivos).
- [ ]  Crear un nuevo ~~TAG~~ RELEASE en GITLAB(Proyect overview→releases→New release)correspondiente al paso realizado con las siglas y fecha `PAP_{YYYYMMDD}`. Ej: [PAP_20230607](http://gitlab.alemana.cl/CC/npcasemp/npcasemp-appventa-node/-/tags/PAP_20230516).
- [ ]  Realizar pruebas y monitorear la aplicación.
- [ ]  Recordar al equipo que actualicen sus ramas en estado **WORKING** y **READY** con `develop`.

## Etapa Bonus - Hotfix

- [ ]  En caso de requerir un `hotfix`, crear rama desde `release/delivery` con el nombre `hotfix/candidate-{YYYYMMDD}`  y sumar los cambios con el fix requerido.
- [ ]  Hacer MR de `hotfix/candidate-{YYYYMMDD}` hacia `release/delivery` y notificar a David Acosta para aprobación por el ***[Canal de Ventas](https://teams.microsoft.com/l/channel/19%3a281bc58cbfcc4110b5a3ed76ef9b3922%40thread.tacv2/Ventas?groupId=ece3a38d-12db-4375-9c09-9c41c1828e25&tenantId=a670b10b-5b0a-4cf1-b50b-2724e4e709dc)*** en el Teams de Esencial:
    
    Ejemplo de mensaje indicando que es para producción, la fecha del paso agendado, sumando enlace a GitLab y TAG del paso anterior:
    
    > *Hola @David Andrés Acosta Miranda, te dejo el MR para el hotfix http://gitlab.alemana.cl/CC/npcasemp/npcasemp-appventa-node/-/merge_requests/780.
    Además dejo el TAG correspondiente al paso anterior [PAP_20230516](http://gitlab.alemana.cl/CC/npcasemp/npcasemp-appventa-node/-/tags/PAP_20230516).
    ¡Gracias!
    Cc: @Alberto Rocco @Yvanna Olivares @Katherine Berríos @Arturo Salinas @Israel Escaida @Felipe Huerta*
    > 
    
    <aside>
    ⚠️ **IMPORTANTE:** El tag que se le comparte a David en este mensaje corresponde al paso anterior y no al paso actual que contiene el bug.
    
    </aside>
    
- [ ]  verificar que se corrigió el error.
- [ ]  Actualizar en cascada desde `release/delivery` → `master` → `develop` → `preprod/{tag}-{YYYYMMDD}` e informar a todo el equipo que actualicen sus ramas de nuevos desarrollos con `develop`. [Ver diagrama aquí.](https://www.notion.so/2-Estrategia-de-Branching-868a41f9eaa3467fbb76fef20e982dc6?pvs=21)