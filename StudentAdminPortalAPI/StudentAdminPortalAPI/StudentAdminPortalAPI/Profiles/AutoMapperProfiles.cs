﻿using DataModels = StudentAdminPortalAPI.DataModels;
using StudentAdminPortalAPI.DomainModels;
using AutoMapper;
using StudentAdminPortalAPI.Profiles.AfterMaps;

namespace StudentAdminPortalAPI.Profiles
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<DataModels.Student, Student>()
                .ReverseMap();
            CreateMap<DataModels.Gender, Gender>()
                .ReverseMap();
            CreateMap<DataModels.Address, Address>()
                .ReverseMap();
            CreateMap<UpdateStudentRequest, DataModels.Student>()
                .AfterMap<UpdateStudentRequestAfterMap>();

        }
    }
}
