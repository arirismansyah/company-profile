-- CreateTable
CREATE TABLE "Attributes" (
    "id" SERIAL NOT NULL,
    "attribute_name" TEXT NOT NULL,
    "attribute_value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" SERIAL NOT NULL,
    "tag_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "service_nama" TEXT NOT NULL,
    "service_desc" TEXT NOT NULL,
    "service_icon" TEXT NOT NULL,
    "service_demo_link" TEXT NOT NULL,
    "service_preview_link" TEXT NOT NULL,
    "service_unit" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "project_name" TEXT NOT NULL,
    "project_desc" TEXT NOT NULL,
    "client_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clients" (
    "id" SERIAL NOT NULL,
    "client_name" TEXT NOT NULL,
    "client_icon" TEXT NOT NULL,
    "client_link" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ServicesToTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectsToServices" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Attributes_attribute_name_key" ON "Attributes"("attribute_name");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_tag_name_key" ON "Tags"("tag_name");

-- CreateIndex
CREATE UNIQUE INDEX "_ServicesToTags_AB_unique" ON "_ServicesToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ServicesToTags_B_index" ON "_ServicesToTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectsToServices_AB_unique" ON "_ProjectsToServices"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectsToServices_B_index" ON "_ProjectsToServices"("B");

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServicesToTags" ADD CONSTRAINT "_ServicesToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ServicesToTags" ADD CONSTRAINT "_ServicesToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToServices" ADD CONSTRAINT "_ProjectsToServices_A_fkey" FOREIGN KEY ("A") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectsToServices" ADD CONSTRAINT "_ProjectsToServices_B_fkey" FOREIGN KEY ("B") REFERENCES "Services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
