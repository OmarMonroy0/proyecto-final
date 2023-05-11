/* creacion de la base  de datos*/

drop table if exists agencia;
create database if not exists agencia;

/*se indica que se usará esa base de datos*/
use agencia;


create table tipo_asiento(
    id_tipo_asiento int AUTO_INCREMENT,
    asiento varchar(255) NOT NULL,
    PRIMARY KEY (id_tipo_asiento)
);

create table tipo_viaje (
    id_tipo_viaje int AUTO_INCREMENT,
    viaje varchar (255),
    PRIMARY KEY (id_tipo_viaje)
);

create table vuelo(
    id_vuelo int AUTO_INCREMENT,
    vuelo varchar (250) NOT NUll,
    PRIMARY KEY(id_vuelo)
);


create table reservacion_vuelo(
    id_reservacion_vuelo INT AUTO_INCREMENT, 
        origen varchar(255) NOT NULL,
        destino varchar(255) NOT NULL,
        fecha_salida DATE NOT NULL,
        fecha_regreso DATE ,
        n_personas int NOT NULL,
        precio DECIMAL (10,2) NOT NULL,
    id_tipo_asiento int NOT NULL,
    id_tipo_viaje int NOT NULL,
    id_vuelo int NOT NULL,
    PRIMARY KEY  (id_reservacion_vuelo),
    FOREIGN KEY (id_tipo_asiento) REFERENCES tipo_asiento,
    FOREIGN KEY (id_tipo_viaje) REFERENCES tipo_viaje, 
    FOREIGN KEY (id_vuelo) REFERENCES vuelo
);
/* para la creacion del tipo de habitacion*/

create table tipo_habitacion(
    id_tipo_habitacion int AUTO_INCREMENT,
    tipo_habitacion varchar(250) NOT NULL,
    PRIMARY KEY(id_tipo_habitacion)
);

/* Para la creacion de los hoteles*/
create table hotel(
    id_hotel int AUTO_INCREMENT,
    hotel varchar(250) NOT NULL,
    PRIMARY KEY (id_hotel)
);

/*cuando se pide un hotel debemos llamar aqui*/
create table reservacion_hotel(
    id_hotel_tipo_habitacion INT AUTO_INCREMENT,
    f_llegada DATE  NOT NULL,
    f_salida DATE NOT NULL,
    id_tipo_habitacion INT NOT NULL,
    id_hotel INT NOT NULL,
    PRIMARY KEY(id_hotel_tipo_habitacion),
    FOREIGN KEY (id_tipo_habitacion) REFERENCES tipo_habitacion,
    FOREIGN KEY (id_hotel) REFERENCES hotel
);

create table paquete(
    id_paquete int AUTO_INCREMENT,
    paquete varchar(250) NOT NULL,
    f_llegada DATE NOT NULL,
    f_salida DATE NOT NULL,
    personas int NOT NULL,
    precio decimal(10,2) NOT NULL,
    PRIMARY KEY (id_paquete)
);

create table pago(
    id_pago int AUTO_INCREMENT,
    correo varchar(250) NOT NULL,
    numero_tarjeta varchar(250) NOT NULL,
    cvv varchar(250) NOT NULL,
    fecha DATE NOT NULL,
);

INSERT INTO tipo_asiento(asiento) values ('Tipo 1');
INSERT INTO tipo_asiento(asiento) values ('Tipo 2');
INSERT INTO tipo_asiento(asiento) values ('Tipo 3');


INSERT INTO tipo_viaje(viaje) values ('Sencillo');
INSERT INTO tipo_viaje(viaje) values ('Doble');

INSERT INTO tipo_habitacion(tipo_habitacion) values ('Sencillo');
INSERT INTO tipo_habitacion(tipo_habitacion) values ('Doble');
INSERT INTO tipo_habitacion(tipo_habitacion) values ('Individual');


INSERT INTO hotel(hotel) values ('Hotel 1');
INSERT INTO hotel(hotel) values ('Hotel 2');


INSERT INTO vuelo(vuelo) values("vuelo 1");
INSERT INTO vuelo(vuelo) values("vuelo 2");
INSERT INTO vuelo(vuelo) values("vuelo 3");
INSERT INTO vuelo(vuelo) values("vuelo 4");