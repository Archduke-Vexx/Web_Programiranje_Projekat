USE [Main2]
GO
SET IDENTITY_INSERT [dbo].[SportskiCentri] ON 

INSERT [dbo].[SportskiCentri] ([ID], [Naziv], [Lokacija]) VALUES (1, N'Cair', N'Nis')
INSERT [dbo].[SportskiCentri] ([ID], [Naziv], [Lokacija]) VALUES (2, N'Sivara', N'Nis')
INSERT [dbo].[SportskiCentri] ([ID], [Naziv], [Lokacija]) VALUES (3, N'Tasmajdan', N'Beograd')
INSERT [dbo].[SportskiCentri] ([ID], [Naziv], [Lokacija]) VALUES (4, N'Kosutnjak', N'Beograd')
INSERT [dbo].[SportskiCentri] ([ID], [Naziv], [Lokacija]) VALUES (5, N'Hala Pozarevac', N'Pozarevac')
SET IDENTITY_INSERT [dbo].[SportskiCentri] OFF
GO
SET IDENTITY_INSERT [dbo].[Sale] ON 

INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (1, N'Fudbal', 1)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (2, N'Tenis', 1)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (3, N'Klizanje', 2)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (4, N'Fudbal', 3)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (5, N'Boks', 3)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (6, N'Ragbi', 3)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (7, N'Tenis', 4)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (8, N'Odbojka', 4)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (9, N'Fudbal', 5)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (10, N'Powerlifting', 3)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (11, N'Olympic Weightlifting', 3)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (12, N'Rvanje', 3)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (13, N'Vaterpolo', 3)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (14, N'Kosarka', 3)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (15, N'Rukomet', 3)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (16, N'Atletika', 3)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (17, N'MMA', 1)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (18, N'Vaterpolo', 1)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (19, N'Powerlifting', 1)
INSERT [dbo].[Sale] ([ID], [Naziv], [SportskiCentarID]) VALUES (20, N'Kosarka', 1)
SET IDENTITY_INSERT [dbo].[Sale] OFF
GO
