import { User } from "../domain/entities/models/user";

// ---------- Tenants Model ----------
export const tenantsModel = [
    {
        tenantId: "5f8d04f0-9a1e-4f0b-9b30-1d2c5a1c1234",
        tenantName: "Tech Solutions S.A.",
        cif: 12345678,
        address: "Calle Falsa 123, Madrid",
        phone: 912345678,
        email: "contacto@techsolutions.com",
        remark: "Empresa de tecnología",
        micronId: "MIC12345",
        numberOfClubs: 3
    },
    {
        tenantId: "1a2b3c4d-5e6f-7a8b-9c0d-112233445566",
        tenantName: "Grupo Deportivo Elite",
        cif: 87654321,
        address: "Av. Deportiva 45, Barcelona",
        phone: 934567890,
        email: "info@grupodeportivo.com",
        remark: "Club multideportivo",
        micronId: "MIC67890",
        numberOfClubs: 5
    },
    {
        tenantId: "abcd1234-ab12-cd34-ef56-abcdef123456",
        tenantName: "Distribuciones López",
        cif: 23456789,
        address: "Polígono Industrial Sur, Sevilla",
        phone: 955123456,
        email: "ventas@dlopez.com",
        remark: "Distribuidora de alimentos",
        micronId: "MIC23456",
        numberOfClubs: 1
    },
    {
        tenantId: "7890abcd-1234-5678-90ab-cdef12345678",
        tenantName: "Academia de Música Armonía",
        cif: 34567890,
        address: "C/ Beethoven 7, Valencia",
        phone: 961234567,
        email: "info@armoniamusica.es",
        remark: "Academia artística",
        micronId: "MIC34567",
        numberOfClubs: 2
    },
    {
        tenantId: "1122aa33-bb44-cc55-dd66-ee7788990011",
        tenantName: "FitZone Gym",
        cif: 45678901,
        address: "Plaza del Ejercicio 1, Málaga",
        phone: 952345678,
        email: "contacto@fitzone.es",
        remark: "Gimnasio de alta gama",
        micronId: "MIC45678",
        numberOfClubs: 4
    },
    {
        tenantId: "123e4567-e89b-12d3-a456-426614174000",
        tenantName: "Escuela de Cocina Mediterránea",
        cif: 56789012,
        address: "C/ Olivares 12, Alicante",
        phone: 965432198,
        email: "info@cocinamed.es",
        remark: "Centro de formación culinaria",
        micronId: "MIC56789",
        numberOfClubs: 1
    },
    {
        tenantId: "00112233-4455-6677-8899-aabbccddeeff",
        tenantName: "Constructora Urbano S.L.",
        cif: 67890123,
        address: "Av. del Progreso 100, Zaragoza",
        phone: 976543210,
        email: "proyectos@urbano.com",
        remark: "Empresa constructora",
        micronId: "MIC67891",
        numberOfClubs: 0
    },
    {
        tenantId: "deadbeef-0000-1111-2222-333344445555",
        tenantName: "Centro Deportivo Costa",
        cif: 78901234,
        address: "Paseo Marítimo 77, Cádiz",
        phone: 956789012,
        email: "costa@deportiva.net",
        remark: "Club frente al mar",
        micronId: "MIC78901",
        numberOfClubs: 6
    },
    {
        tenantId: "cafebabe-aaaa-bbbb-cccc-ddddeeeeffff",
        tenantName: "Instituto de Idiomas Global",
        cif: 89012345,
        address: "C/ Inglés 23, Bilbao",
        phone: 944321098,
        email: "admin@idiomasglobal.org",
        remark: "Centro de idiomas internacional",
        micronId: "MIC89012",
        numberOfClubs: 2
    },
    {
        tenantId: "beadfeed-1234-5678-9abc-def012345678",
        tenantName: "GreenTech Innovación",
        cif: 90123456,
        address: "Av. Verde 5, Valladolid",
        phone: 983456789,
        email: "hello@greentech.io",
        remark: "Startup ecológica",
        micronId: "MIC90123",
        numberOfClubs: 0
    }
];

// ---------- Clubs Model ----------
export const clubsModel = [
    {
        clubId: "a1b2c3d4-1234-5678-9abc-def000000001",
        clubName: "Club Deportivo Central",
        cif: 11223344,
        address: "Av. Central 100, Madrid",
        phone: 911223344,
        email: "central@clubdeportivo.com",
        remark: "Club con instalaciones completas",
        micronId: "MIC10001",
        accountingId: "ACC10001",
        tenantName: "Tech Solutions S.A.",
        numberOfMachines: 25
    },
    {
        clubId: "a1b2c3d4-1234-5678-9abc-def000000002",
        clubName: "Club Natación Norte",
        cif: 22334455,
        address: "C/ Río 8, Bilbao",
        phone: 944556677,
        email: "info@natacionnorte.com",
        remark: "Piscina olímpica incluida",
        micronId: "MIC10002",
        accountingId: "ACC10002",
        tenantName: "Grupo Deportivo Elite",
        numberOfMachines: 18
    },
    {
        clubId: "a1b2c3d4-1234-5678-9abc-def000000003",
        clubName: "Gym Power Fit",
        cif: 33445566,
        address: "Polígono Norte, Sevilla",
        phone: 955667788,
        email: "contacto@powerfitgym.es",
        remark: "Gimnasio 24h",
        micronId: "MIC10003",
        accountingId: "ACC10003",
        tenantName: "FitZone Gym",
        numberOfMachines: 32
    },
    {
        clubId: "a1b2c3d4-1234-5678-9abc-def000000004",
        clubName: "Club de Escalada Vertical",
        cif: 44556677,
        address: "Calle Montaña 7, Zaragoza",
        phone: 976112233,
        email: "info@verticalclimb.com",
        remark: "Especializado en escalada indoor",
        micronId: "MIC10004",
        accountingId: "ACC10004",
        tenantName: "Grupo Deportivo Elite",
        numberOfMachines: 10
    },
    {
        clubId: "a1b2c3d4-1234-5678-9abc-def000000005",
        clubName: "Box & Fight Club",
        cif: 55667788,
        address: "Av. Lucha 3, Valencia",
        phone: 961778899,
        email: "contact@boxfightclub.es",
        remark: "Boxeo, kickboxing y MMA",
        micronId: "MIC10005",
        accountingId: "ACC10005",
        tenantName: "FitZone Gym",
        numberOfMachines: 12
    },
    {
        clubId: "a1b2c3d4-1234-5678-9abc-def000000006",
        clubName: "Centro Yoga Vida",
        cif: 66778899,
        address: "Plaza del Bienestar 5, Málaga",
        phone: 952334455,
        email: "info@yogavida.com",
        remark: "Enfoque holístico",
        micronId: "MIC10006",
        accountingId: "ACC10006",
        tenantName: "Tech Solutions S.A.",
        numberOfMachines: 6
    },
    {
        clubId: "a1b2c3d4-1234-5678-9abc-def000000007",
        clubName: "Fitness Factory",
        cif: 77889900,
        address: "Av. Industrial 88, Alicante",
        phone: 965998877,
        email: "admin@fitnessfactory.es",
        remark: "Cadena nacional de gimnasios",
        micronId: "MIC10007",
        accountingId: "ACC10007",
        tenantName: "Distribuciones López",
        numberOfMachines: 40
    },
    {
        clubId: "a1b2c3d4-1234-5678-9abc-def000000008",
        clubName: "Club Deportivo Costa Sur",
        cif: 88990011,
        address: "Paseo Marítimo 99, Cádiz",
        phone: 956778899,
        email: "contacto@costasurclub.com",
        remark: "Club frente al mar con spa",
        micronId: "MIC10008",
        accountingId: "ACC10008",
        tenantName: "Centro Deportivo Costa",
        numberOfMachines: 20
    },
    {
        clubId: "a1b2c3d4-1234-5678-9abc-def000000009",
        clubName: "Zona Funcional",
        cif: 99001122,
        address: "C/ Funcional 1, Valladolid",
        phone: 983221144,
        email: "info@zonafuncional.es",
        remark: "Entrenamiento personalizado",
        micronId: "MIC10009",
        accountingId: "ACC10009",
        tenantName: "GreenTech Innovación",
        numberOfMachines: 15
    },
    {
        clubId: "a1b2c3d4-1234-5678-9abc-def000000010",
        clubName: "Centro Deportivo Internacional",
        cif: 10111213,
        address: "Av. Naciones 10, Barcelona",
        phone: 934001122,
        email: "contacto@centrodeportivoint.com",
        remark: "Club con enfoque global",
        micronId: "MIC10010",
        accountingId: "ACC10010",
        tenantName: "Instituto de Idiomas Global",
        numberOfMachines: 22
    }
]

// ---------- Machines Model ----------
export const machinesModel = [
    {
        machineId: "mch-0001-aaaa-bbbb-cccc-ddddeeeefff1",
        machineCode: "MC-001",
        micronId: "MIC10001",
        smartFridgeld: "SFG-001",
        smartFridgePassword: "fridgePass01",
        terminalId: 1001,
        tnaSerialNumber: "TNA-001-A",
        rustdeskId: "rd001",
        rustdeskPass: "pass001",
        clubName: "Club Deportivo Central",
        state: true
    },
    {
        machineId: "mch-0002-aaaa-bbbb-cccc-ddddeeeefff2",
        machineCode: "MC-002",
        micronId: "MIC10002",
        smartFridgeld: "SFG-002",
        smartFridgePassword: "fridgePass02",
        terminalId: 1002,
        tnaSerialNumber: "TNA-002-B",
        rustdeskId: "rd002",
        rustdeskPass: "pass002",
        clubName: "Club Natación Norte",
        state: false
    },
    {
        machineId: "mch-0003-aaaa-bbbb-cccc-ddddeeeefff3",
        machineCode: "MC-003",
        micronId: "MIC10003",
        smartFridgeld: "SFG-003",
        smartFridgePassword: "fridgePass03",
        terminalId: 1003,
        tnaSerialNumber: "TNA-003-C",
        rustdeskId: "rd003",
        rustdeskPass: "pass003",
        clubName: "Gym Power Fit",
        state: true
    },
    {
        machineId: "mch-0004-aaaa-bbbb-cccc-ddddeeeefff4",
        machineCode: "MC-004",
        micronId: "MIC10004",
        smartFridgeld: "SFG-004",
        smartFridgePassword: "fridgePass04",
        terminalId: 1004,
        tnaSerialNumber: "TNA-004-D",
        rustdeskId: "rd004",
        rustdeskPass: "pass004",
        clubName: "Club de Escalada Vertical",
        state: true
    },
    {
        machineId: "mch-0005-aaaa-bbbb-cccc-ddddeeeefff5",
        machineCode: "MC-005",
        micronId: "MIC10005",
        smartFridgeld: "SFG-005",
        smartFridgePassword: "fridgePass05",
        terminalId: 1005,
        tnaSerialNumber: "TNA-005-E",
        rustdeskId: "rd005",
        rustdeskPass: "pass005",
        clubName: "Box & Fight Club",
        state: false
    },
    {
        machineId: "mch-0006-aaaa-bbbb-cccc-ddddeeeefff6",
        machineCode: "MC-006",
        micronId: "MIC10006",
        smartFridgeld: "SFG-006",
        smartFridgePassword: "fridgePass06",
        terminalId: 1006,
        tnaSerialNumber: "TNA-006-F",
        rustdeskId: "rd006",
        rustdeskPass: "pass006",
        clubName: "Centro Yoga Vida",
        state: true
    },
    {
        machineId: "mch-0007-aaaa-bbbb-cccc-ddddeeeefff7",
        machineCode: "MC-007",
        micronId: "MIC10007",
        smartFridgeld: "SFG-007",
        smartFridgePassword: "fridgePass07",
        terminalId: 1007,
        tnaSerialNumber: "TNA-007-G",
        rustdeskId: "rd007",
        rustdeskPass: "pass007",
        clubName: "Fitness Factory",
        state: false
    },
    {
        machineId: "mch-0008-aaaa-bbbb-cccc-ddddeeeefff8",
        machineCode: "MC-008",
        micronId: "MIC10008",
        smartFridgeld: "SFG-008",
        smartFridgePassword: "fridgePass08",
        terminalId: 1008,
        tnaSerialNumber: "TNA-008-H",
        rustdeskId: "rd008",
        rustdeskPass: "pass008",
        clubName: "Club Deportivo Costa Sur",
        state: true
    },
    {
        machineId: "mch-0009-aaaa-bbbb-cccc-ddddeeeefff9",
        machineCode: "MC-009",
        micronId: "MIC10009",
        smartFridgeld: "SFG-009",
        smartFridgePassword: "fridgePass09",
        terminalId: 1009,
        tnaSerialNumber: "TNA-009-I",
        rustdeskId: "rd009",
        rustdeskPass: "pass009",
        clubName: "Zona Funcional",
        state: true
    },
    {
        machineId: "mch-0010-aaaa-bbbb-cccc-ddddeeeefff0",
        machineCode: "MC-010",
        micronId: "MIC10010",
        smartFridgeld: "SFG-010",
        smartFridgePassword: "fridgePass10",
        terminalId: 1010,
        tnaSerialNumber: "TNA-010-J",
        rustdeskId: "rd010",
        rustdeskPass: "pass010",
        clubName: "Centro Deportivo Internacional",
        state: false
    }
]

// ---------- Users Model ----------
export const users: User[] = [
    {
        userId: "3b9ba900-4635-4380-9a99-7204033ec1da",
        username: "clubadmin1",
        password: "passClub01",
        micronId: "MIC10001",
        micronUser: "micronUser01",
        micronPass: "micronPass01",
        type: 1,
        clubName: "Club Deportivo Central",
        tenantId: "tenant-001"
      },
      {
        userId: "168ad62a-3886-4a26-aa83-11fd3fa4c7bc",
        username: "tenantadmin1",
        password: "passTenant01",
        micronId: "MIC20001",
        micronUser: "micronUser02",
        micronPass: "micronPass02",
        type: 2,
        clubName: "",
        tenantId: "tenant-002"
      },
      {
        userId: "11475696-ad22-42be-85c2-bc2c7eb859b1",
        username: "clubadmin2",
        password: "passClub02",
        micronId: "MIC10002",
        micronUser: "micronUser03",
        micronPass: "micronPass03",
        type: 1,
        clubName: "Box & Fight Club",
        tenantId: "tenant-001"
      },
      {
        userId: "fb0874e7-c75d-48e9-a984-20ced13da41d",
        username: "tenantadmin2",
        password: "passTenant02",
        micronId: "MIC20002",
        micronUser: "micronUser04",
        micronPass: "micronPass04",
        type: 2,
        clubName: "",
        tenantId: "tenant-003"
      },
      {
        userId: "d68dff31-458f-437c-a83b-6c67dffdd67a",
        username: "clubadmin3",
        password: "passClub03",
        micronId: "MIC10003",
        micronUser: "micronUser05",
        micronPass: "micronPass05",
        type: 1,
        clubName: "Fitness Factory",
        tenantId: "tenant-002"
      },
      {
        userId: "a4e074d3-92f1-4d54-8710-3dccdb0aefe0",
        username: "tenantadmin3",
        password: "passTenant03",
        micronId: "MIC20003",
        micronUser: "micronUser06",
        micronPass: "micronPass06",
        type: 2,
        clubName: "",
        tenantId: "tenant-004"
      },
      {
        userId: "26f6ab83-2137-4e2c-ad63-ae82fb6597c4",
        username: "clubadmin4",
        password: "passClub04",
        micronId: "MIC10004",
        micronUser: "micronUser07",
        micronPass: "micronPass07",
        type: 1,
        clubName: "Club Natación Norte",
        tenantId: "tenant-003"
      },
      {
        userId: "17beddaa-5055-485c-92e3-c608193f7938",
        username: "tenantadmin4",
        password: "passTenant04",
        micronId: "MIC20004",
        micronUser: "micronUser08",
        micronPass: "micronPass08",
        type: 2,
        clubName: "",
        tenantId: "tenant-005"
      },
      {
        userId: "964c2e3a-acd9-4fbb-b8fc-1bca9f934aca",
        username: "clubadmin5",
        password: "passClub05",
        micronId: "MIC10005",
        micronUser: "micronUser09",
        micronPass: "micronPass09",
        type: 1,
        clubName: "Centro Yoga Vida",
        tenantId: "tenant-004"
      },
      {
        userId: "0208caf0-a3fd-4ea5-b2fb-7ced8b621fd2",
        username: "tenantadmin5",
        password: "passTenant05",
        micronId: "MIC20005",
        micronUser: "micronUser10",
        micronPass: "micronPass10",
        type: 2,
        clubName: "",
        tenantId: "tenant-006"
      }
]