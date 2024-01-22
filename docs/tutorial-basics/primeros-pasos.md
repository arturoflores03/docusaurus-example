---
sidebar_position: 1
---

# Primeros Pasos

## 1 Accesos

Para trabajar en este proyecto se requieren varios accesos que se deben gestionar a través de la Product Owner (PO) de tu célula.

Es importante que tengas paciencia en este proceso, ya que puede tomar un par se semanas 🧘‍♀️🧘‍♂️. Esto porque distintas personas de distintos equipos y organizaciones (entre ellas de Esencial y Clínica Alemana) son responsables de otorgar estos accesos.

![Accesos a Solicitar](/img/Accesos.png)

## 2 Gestión de accesos Esencial

### 1. Acceso a este Notion

Para tener a mano toda la Wiki de FDV necesitas tener permisos para revisar cada vez que necesites toda esta documentación y contribuir activamente en su mantenimiento y mejora.

### 2. Acceso a reuniones y ceremonias

Para participar de las distintas ceremonias dentro del sprint, la PO te deberá invitar a las distintas reuniones vía Teams. (Planning, Daily, Refinamiento, Retroalimentación, entre otras).

### 3. Canal oficial de comunicación

La herramienta de comunicación oficial de Esencial es Teams. Con esta herramienta puedes acceder al chat **FDV 2** para una comunicación de equipo diaria. Como también usar los canales de equipos ****[Ventas](https://teams.microsoft.com/l/channel/19%3a281bc58cbfcc4110b5a3ed76ef9b3922%40thread.tacv2/Ventas?groupId=ece3a38d-12db-4375-9c09-9c41c1828e25&tenantId=a670b10b-5b0a-4cf1-b50b-2724e4e709dc)** y ****🚀 [Despliegues CI-CD](https://teams.microsoft.com/l/channel/19%3a66139a21950645a087d1e3ed27034b23%40thread.tacv2/%25F0%259F%259A%2580%2520Despliegues%2520CI-CD?groupId=ece3a38d-12db-4375-9c09-9c41c1828e25&tenantId=a670b10b-5b0a-4cf1-b50b-2724e4e709dc)** donde se planifican los pasos a producción.

### 4. Canal no oficial de comunicación

En el día a día, los DEVs y QA se reunen en servidores de Discord (de [Continuum](https://discord.gg/qsaBsZeq5t) y [Babel](https://discord.gg/tXtqptQ5)) para comunicarse, resolver dudas, para *pair programming*, entre otras cosas. Para acceder a estos servidores comunícate con algún DEV de alguno de estos proveedores para solicitar permisos.

### 5. Jira

Esta es la herramienta que utilizamos bajo la metodología de Scrum. Debes comunicarte con la PO de tu célula para acceder al tablero.

### 6. Figma

Esta es la herramienta de diseño que el equipo UX de Esencial usa para armar las vistas. Por lo general se usan distintos archivos, por lo que considera revisar siempre si tienes acceso a cada nuevo Figma que se presente en un refinamiento.

### 7. Backoffice (Azure AD)

¿@Israel Escaida me ayudas aquí? ¿Qué se puede hacer en el Backoffice, cómo se puede acceder (enlaces) y me confirmas si el acceso se gestiona igual con David?

Para poder acceder al backoffice es necesario tener cuenta en azure

- Formulario fun manual y generar/subir documentos a docusign
    - url: dev-qa-prod/formulario-fun
    - Objetivo: Permite enviar la propuesta de salud a kinetyc y generar documentos (fun, terminos y condiciones, solicitud abono y autorizacion medios)
- Formulario fun autocomplete y generar/subir documentos a docusign
    - url: dev-qa-prod/formulario-fun-autocomplete
    - Permite enviar la propuesta de salud a kinetyc y generar documentos (fun, terminos y condiciones, solicitud abono y autorizacion medios)
- Generar documentos
    - url: dev-qa-prod/generar-documentos o dev-qa-prod/operaciones
    - Permite generar los documentos (fun, terminos y condiciones, solicitud abono y autorizacion medios)
- App config
    - url: dev-qa-prod/bboo/configuration
    - Permite crear variables de configuracion para la aplicacion
- Health Plans
    - url: dev-qa-prod/bboo/health-plans
    - permite visualizar y editar los planes de salud
- Envío de correo de rechazo
    - url: pendiente

### 8. DocusSign

Esta herramienta se utiliza para acreditar la firma digital de usuarios en la Declaración Personal de Salud (DPS) como también para la subida de distintos documentos requeridos en el flujo.

Los accesos requeridos serían tanto para cambiar ambiente, para ver los *envelops** ya creados y para hacer modificaciones en el diseño de elementos como sellos de agua.

`envelops`: Repositorios de documentos en Docusign. 

### 9. Salesforce (QA)

Esta es la herramienta utilizada para gestión de prospectos por parte de los ejecutivos de venta de Esencial. Actualmente, las únicas personas que requieren acceso son las POs y el QA para validar datos y hacer pruebas.

### 10. Google Tag Manager, Google Analytics y Google Optimize

Estas son las herramientas que se utilizan para medir las interacciones en el flujo. Para obtener accesos debes contar con una cuenta de Google asociada a tu correo únicamente.

## 3 Gestión de accesos Clínica Alemana

En la actualidad, las aplicaciones de Esencial se alojan en la infraestructura de Clínica Alemana. Por este motivo, algunos accesos deben ser gestionados por Jonathan Prieto (Arquitecto TI de Clínica Alemana):

<aside>
💡 Debes estar muy pendiente de **aceptar la invitaciones** que te **llegarán a tu correo**.

</aside>

### 11. Azure AD

Para todas las herramientas y plataformas digitales que se utilizan en Clínica Alemana y Esencial se utiliza la autenticación de Azure Active Directory. Por lo tanto necesitarás únicamente de tu correo corporativo para cualquier acceso.

### 12. VPN

Para conectarse a los servidores de Clínica Alemana, debes conectarte a través de una VPN. En MacOS y Windows deberás descargar [Global Protect](https://vpn.alemana.cl/global-protect/getsoftwarepage.esp). Una vez aceptes la invitación que te llegará por correo, podrás conectarte usando el portal: *vpn.alemana.cl*

### 13. GitLab

Al igual que con la VPN, te llegará un correo invitación para acceder a http://gitlab.alemana.cl/. Una vez aceptes la invitación, procura fijarte que dentro de GitLab te compartieron el repositorio de Flujo de Venta con el nombre: **CC / NPCASEMP / NPCASEMP-APPVENTA-NODE.** 

### 14. Amazon Web Service

[Con este acceso](https://clinicaalemana.awsapps.com/start#/) podrás gestionar el desarrollo de tu aplicación con los distintos servicios que provee AWS. Ej: consultar Logs de tu ambiente temporal, de desarrollo, certificación y/o de producción.

### 15. Jenkins

Clínica Alemana tiene configurado Jenkins como la herramienta de despliegue para todas sus aplicaciones digitales. Con este acceso podrás hacer seguimiento de los despliegues en los distintos ambientes de desarrollo, certificación y producción. Revisa los enlaces a los pipelines [aquí](https://www.notion.so/Jenkins-f6a10225cb4d44adb6a97c9c6a3a5a46?pvs=21).

### 16. SonarQube

Con este acceso podrás conocer el porcentaje de cobertura que alcanzó la aplicación luego de sumar tu nuevo desarrollo.

**URL:** [http://sonar.alemana.cl/](http://sonar.alemana.cl/sessions/new)

**USER:** rodrigo.lopez

**PASS:** rodrigo.lopez
